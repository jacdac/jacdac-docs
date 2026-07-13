import React from 'react';

export default function DashboardMigrationPanel() {
  return (
    <section
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 16,
        padding: '1rem 1.25rem',
        background: '#ffffff',
      }}
    >
      <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Dashboard Migration Started</h2>
      <p style={{ margin: '0.5rem 0 0', color: '#4b5563' }}>
        This page is the local Astro entry point for the React dashboard migration.
        The full React dashboard code will be incrementally ported here.
      </p>
      <ul style={{ margin: '0.85rem 0 0', color: '#374151' }}>
        <li>React support is enabled in this Astro app.</li>
        <li>The sidebar now links to this local route.</li>
        <li>Next step is mounting the existing dashboard app shell and providers.</li>
      </ul>
    </section>
  );
}
