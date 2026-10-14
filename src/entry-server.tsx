// entry-server.tsx — renders the app to static HTML at build time (see scripts/prerender.mjs)
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export function render(): string {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
