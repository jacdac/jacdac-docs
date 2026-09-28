import React, { useEffect, useMemo } from 'react';
import Dashboard from '../../../../src/components/dashboard/Dashboard';
import JacdacContext from '../../../../src/jacdac/Context';
import { JDBus } from '../../../../jacdac-ts/src/jdom/bus';
import { SnackbarProvider } from 'notistack';
import { HostedSimulatorsProvider } from '../../../../src/components/HostedSimulatorsContext';
import { PacketsProvider } from '../../../../src/components/PacketsContext';
import { AppProvider } from '../../../../src/components/AppContext';
import { SimulatorDialogsProvider } from '../../../../src/components/SimulatorsDialogContext';
import { WebAudioProvider } from '../../../../src/components/ui/WebAudioContext';

export default function LegacyDashboardIsland() {
  const bus = useMemo(() => new JDBus([], { dashboard: true, client: false }), []);

  useEffect(() => {
    void bus.start();
    return () => {
      void bus.stop();
    };
  }, [bus]);

  return (
    <JacdacContext.Provider value={{ bus }}>
      <SnackbarProvider maxSnack={1} dense={true}>
        <WebAudioProvider>
          <HostedSimulatorsProvider>
            <PacketsProvider>
              <AppProvider>
                <SimulatorDialogsProvider>
                  <Dashboard
                    showAvatar={true}
                    showHeader={true}
                    showConnect={true}
                    showStartSimulators={true}
                    showStartRoleSimulators={true}
                    showDeviceProxyAlert={true}
                  />
                </SimulatorDialogsProvider>
              </AppProvider>
            </PacketsProvider>
          </HostedSimulatorsProvider>
        </WebAudioProvider>
      </SnackbarProvider>
    </JacdacContext.Provider>
  );
}
