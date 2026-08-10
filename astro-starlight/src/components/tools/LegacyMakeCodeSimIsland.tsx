import { SnackbarProvider } from 'notistack';
import React, { useEffect, useMemo } from 'react';
import { JDBus } from '../../../../jacdac-ts/src/jdom/bus';
import { JDDevice } from '../../../../jacdac-ts/src/jdom/device';
import { isReading, isValueOrIntensity } from '../../../../jacdac-ts/src/jdom/spec';
import { delay, strcmp } from '../../../../jacdac-ts/src/jdom/utils';
import Dashboard from '../../../../src/components/dashboard/Dashboard';
import { HostedSimulatorsProvider } from '../../../../src/components/HostedSimulatorsContext';
import { PacketsProvider } from '../../../../src/components/PacketsContext';
import { AppProvider } from '../../../../src/components/AppContext';
import { SimulatorDialogsProvider } from '../../../../src/components/SimulatorsDialogContext';
import { WebAudioProvider } from '../../../../src/components/ui/WebAudioContext';
import MakeCodeBlocksAndSimsBox from '../../../../src/components/makecode/MakeCodeBlocksAndSimsBox';
import IFrameBridgeClient from '../../../../src/components/makecode/iframebridgeclient';
import JacdacContext from '../../../../src/jacdac/Context';
import { usePersistentSimulators } from '../../../../src/jacdac/usePersistentSimulators';
import useChange from '../../../../src/jacdac/useChange';
import useRoleManagerClient from '../../../../src/components/services/useRoleManagerClient';


function deviceSort(l: JDDevice, r: JDDevice): number {
  const srvScore = (srv: jdspec.ServiceSpec) =>
    srv.packets.reduce(
      (prev, pkt) => prev + (isReading(pkt) ? 10 : isValueOrIntensity(pkt) ? 1 : 0),
      0
    ) || 0;
  const score = (srvs: jdspec.ServiceSpec[]) => srvs.reduce((prev, srv) => prev + srvScore(srv), 0);

  const ls = score(
    l
      .services()
      .slice(1)
      .map(srv => srv.specification)
      .filter(spec => !!spec)
  );
  const rs = score(
    r
      .services()
      .slice(1)
      .map(srv => srv.specification)
      .filter(spec => !!spec)
  );
  if (ls !== rs) return -ls + rs;
  return strcmp(l.deviceId, r.deviceId);
}

function MakeCodeSimBody(props: { bus: JDBus }) {
  const { bus } = props;
  useEffect(() => {
    void bus.start();
    bus.streaming = true;
    bus.broadcastDisconnectRequest();
    return () => {
      void bus.stop();
    };
  }, [bus]);

  usePersistentSimulators();

  const iframeBridge = bus.nodeData[IFrameBridgeClient.DATA_ID] as IFrameBridgeClient;
  const deviceFilter = iframeBridge?.deviceFilter.bind(iframeBridge);
  const serviceFilter = iframeBridge?.serviceFilter.bind(iframeBridge);
  // need to deal with simulators automatically, otherwise MakeCode will not see them
  const roleManagerClient = useRoleManagerClient()
  const allRolesBound = useChange(roleManagerClient, _ => _?.allRolesBound())
  const handleStartSimulators = async () => {
        roleManagerClient?.startSimulators()
        await delay(1000)
    }

  // TODO
  // 1. need separate modes: just for simulators (hideDevices), just for devices (hideSimulators)
  // 2. need to expose modes via URL params so that we can link to them from MakeCode
  // 3. add simulators automatically, no manual start of simulators
  return (
    <>
      <Dashboard
        hideSimulatorButtons={true}
        showHeader={false}
        showDeviceHeader={true}
        showDeviceAvatar={true}
        deviceSort={deviceSort}
        deviceFilter={deviceFilter}
        serviceFilter={serviceFilter}
        showStartRoleSimulators={false}
        alwaysVisible={true}
        variant="icon"
        controlled={true}
      />
    </>
  );
}

export default function LegacyMakeCodeSimIsland() {
  const bus = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const frameId = window.location.hash?.slice(1) || undefined;
    const parentOrigin = params.get('parentOrigin') || undefined;
    const nextBus = new JDBus([], {
      dashboard: true,
      client: false,
      parentOrigin,
      serviceProviderIdSalt: frameId,
    });
    new IFrameBridgeClient(nextBus, frameId);
    return nextBus;
  }, []);

  return (
    <JacdacContext.Provider value={{ bus }}>
      <SnackbarProvider maxSnack={1} dense={true}>
        <WebAudioProvider>
          <HostedSimulatorsProvider>
            <PacketsProvider>
              <AppProvider>
                <SimulatorDialogsProvider>
                  <MakeCodeSimBody bus={bus} />
                </SimulatorDialogsProvider>
              </AppProvider>
            </PacketsProvider>
          </HostedSimulatorsProvider>
        </WebAudioProvider>
      </SnackbarProvider>
    </JacdacContext.Provider>
  );
}