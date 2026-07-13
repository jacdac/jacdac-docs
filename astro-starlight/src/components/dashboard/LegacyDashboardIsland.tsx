import React, { useEffect, useMemo } from 'react';
import Dashboard from '../../../../src/components/dashboard/Dashboard';
import JacdacContext from '../../../../src/jacdac/Context';
import { JDBus } from '../../../../jacdac-ts/src/jdom/bus';

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
      <Dashboard
        showAvatar={true}
        showHeader={true}
        showConnect={true}
        showStartSimulators={true}
        showStartRoleSimulators={true}
        showDeviceProxyAlert={true}
      />
    </JacdacContext.Provider>
  );
}
