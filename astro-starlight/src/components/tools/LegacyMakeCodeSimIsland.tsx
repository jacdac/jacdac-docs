import { Card, List, Typography } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import React, { useEffect, useMemo, useRef } from 'react';
import { JDBus } from '../../../../jacdac-ts/src/jdom/bus';
import { JDDevice } from '../../../../jacdac-ts/src/jdom/device';
import { isReading, isValueOrIntensity } from '../../../../jacdac-ts/src/jdom/spec';
import { strcmp } from '../../../../jacdac-ts/src/jdom/utils';
import Dashboard from '../../../../src/components/dashboard/Dashboard';
import DeviceCardHeader from '../../../../src/components/devices/DeviceCardHeader';
import { HostedSimulatorsProvider } from '../../../../src/components/HostedSimulatorsContext';
import { PacketsProvider } from '../../../../src/components/PacketsContext';
import { AppProvider } from '../../../../src/components/AppContext';
import RoleListItem from '../../../../src/components/services/RoleListItem';
import { SimulatorDialogsProvider } from '../../../../src/components/SimulatorsDialogContext';
import { WebAudioProvider } from '../../../../src/components/ui/WebAudioContext';
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
  const autoStartInFlightRef = useRef(false);

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
  const mode = useChange(iframeBridge, _ => _?.mode);
  
  // new roles are available if role manager is present and not all roles are bound
  const roleManagerClient = useRoleManagerClient();
  const allRolesBound = useChange(roleManagerClient, _ => _?.allRolesBound());
  const roleManagerChangeId = useChange(roleManagerClient, _ => _?.changeId);

  // the physical device (e.g. micro:bit) hosting the role manager service
  const connectedDevice = useChange(roleManagerClient, _ => _?.service?.device);
  // roles declared by the program that have not been bound to a device yet
  const unboundRoles = useChange(
    roleManagerClient,
    _ => _?.roles.filter(role => !bus.device(role.deviceId, true)),
    [roleManagerChangeId]
  );

  // TODO: when we are showing only devices, we don't want to spin up simulators, but have
  // a "skeleton" device twin
  useEffect(() => {
    if (!roleManagerClient || allRolesBound || autoStartInFlightRef.current) return;

    autoStartInFlightRef.current = true;
    try {
      roleManagerClient.startSimulators();
    } finally {
      autoStartInFlightRef.current = false;
    }
  }, [allRolesBound, roleManagerChangeId, roleManagerClient]);

  return (
    <>
      {mode === 'device' && connectedDevice && (
        <Card sx={{ mb: 1 }}>
          <DeviceCardHeader device={connectedDevice} showAvatar={true} />
        </Card>
      )}
      {mode === 'device' && !!unboundRoles?.length && (
        <Card sx={{ mb: 1 }}>
          <Typography variant="subtitle2" sx={{ px: 2, pt: 1 }}>
            Waiting for roles
          </Typography>
          <List dense={true}>
            {unboundRoles.map(role => (
              <RoleListItem key={role.name} role={role} />
            ))}
          </List>
        </Card>
      )}
      <Dashboard
        hideSimulatorButtons={true}
        hideDevices={mode === "simulator"}
        hideSimulators={mode === "device"}
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
    const frameId = window.location.hash?.slice(1) || '';
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