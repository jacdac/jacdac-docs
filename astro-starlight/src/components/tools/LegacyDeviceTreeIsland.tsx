import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type LegacyModules = {
  JacdacContext: any;
  bus: any;
  ConnectAlert: any;
  JDomTreeView: any;
};

export default function LegacyDeviceTreeIsland() {
  const [open, setOpen] = useState(false);
  const [modules, setModules] = useState<LegacyModules | undefined>();
  const [portalReady, setPortalReady] = useState(false);
  const [deviceCount, setDeviceCount] = useState(0);

  useEffect(() => {
    let mounted = true;
    let loadedBus: any;

    const load = async () => {
      const [contextMod, busMod, connectAlertMod, treeMod] = await Promise.all([
        import('../../../../src/jacdac/Context'),
        import('../../../../src/jacdac/providerbus'),
        import('../../../../src/components/alert/ConnectAlert'),
        import('../../../../src/components/tools/JDomTreeView'),
      ]);

      loadedBus = busMod.default;
      void loadedBus.start();

      if (!mounted) return;
      setModules({
        JacdacContext: contextMod.default,
        bus: loadedBus,
        ConnectAlert: connectAlertMod.default,
        JDomTreeView: treeMod.default,
      });
    };

    void load();

    return () => {
      mounted = false;
      if (loadedBus?.stop) void loadedBus.stop();
    };
  }, []);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (!modules?.bus || !open) return;

    const updateDeviceCount = () => {
      const count = modules.bus.devices({ ignoreInfrastructure: true })?.length || 0;
      setDeviceCount(count);
    };

    updateDeviceCount();
    const timer = window.setInterval(updateDeviceCount, 750);
    return () => window.clearInterval(timer);
  }, [modules, open]);

  const JacdacContext = modules?.JacdacContext;
  const ConnectAlert = modules?.ConnectAlert;
  const JDomTreeView = modules?.JDomTreeView;
  const bus = modules?.bus;

  return (
    <>
      <div style={{ margin: '1rem 0' }}>
        <p style={{ margin: 0 }}>
          Use the wrench button on the left edge to open the device tree.
        </p>
      </div>

      <button
        aria-label="Open tools drawer"
        title="Open tools drawer"
        onClick={() => setOpen(true)}
        style={{
          position: 'sticky',
          left: 0,
          top: '5.25rem',
          zIndex: 20,
          width: '2.35rem',
          height: '2.35rem',
          marginTop: '0.5rem',
          border: '1px solid var(--sl-color-hairline)',
          background: 'var(--sl-color-bg)',
          borderRadius: '999px',
          cursor: 'pointer',
          display: 'grid',
          placeItems: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M22 6.8a6 6 0 0 1-8.2 5.56L7.7 18.46a2 2 0 1 1-2.83-2.83l6.1-6.1A6 6 0 0 1 17.2 2l-3.06 3.06 1.74 1.74L22 6.8Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open &&
        portalReady &&
        createPortal(
          <>
            <div
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.35)',
                zIndex: 180,
              }}
            />
            <div
              style={{
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                width: 'min(360px, 100vw)',
                background: 'var(--sl-color-bg)',
                borderRight: '1px solid var(--sl-color-hairline)',
                zIndex: 181,
                overflow: 'auto',
                boxShadow: '6px 0 20px rgba(0, 0, 0, 0.22)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5rem',
                  borderBottom: '1px solid var(--sl-color-hairline)',
                }}
              >
                <strong style={{ flex: 1 }}>Device Tree</strong>
                <button
                  aria-label="Close tools drawer"
                  onClick={() => setOpen(false)}
                  style={{
                    border: '1px solid var(--sl-color-hairline)',
                    background: 'var(--sl-color-bg)',
                    borderRadius: '0.4rem',
                    padding: '0.25rem 0.5rem',
                    cursor: 'pointer',
                  }}
                >
                  Close
                </button>
              </div>

              {!modules && <div style={{ padding: '0.75rem' }}>Loading device tree...</div>}

              {modules && JacdacContext && ConnectAlert && JDomTreeView && bus && (
                <JacdacContext.Provider value={{ bus }}>
                  <div style={{ padding: '0.5rem' }}>
                    <ConnectAlert closeable={true} />
                    <JDomTreeView />
                    {deviceCount === 0 && (
                      <div
                        style={{
                          margin: '0.75rem 0.25rem',
                          padding: '0.6rem 0.75rem',
                          border: '1px dashed var(--sl-color-hairline)',
                          borderRadius: '0.5rem',
                          color: 'var(--sl-color-text-accent)',
                          fontSize: '0.92rem',
                        }}
                      >
                        No devices connected yet. Use CONNECT above, then connected devices will appear here.
                      </div>
                    )}
                  </div>
                </JacdacContext.Provider>
              )}
            </div>
          </>,
          document.body
        )}
    </>
  );
}