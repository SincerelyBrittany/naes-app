// Injects the server-rendered app into dist/index.html so crawlers that don't
// run JavaScript (Bing, AI search bots, social previews) still see the content.
import { readFile, writeFile, rm } from 'node:fs/promises';

const htmlPath = new URL('../dist/index.html', import.meta.url);
const ssrDir = new URL('../dist-ssr/', import.meta.url);

const { render } = await import(new URL('entry-server.mjs', ssrDir));
const template = await readFile(htmlPath, 'utf8');

const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error(`prerender: ${marker} not found in dist/index.html`);
}

await writeFile(htmlPath, template.replace(marker, `<div id="root">${render()}</div>`));
await rm(ssrDir, { recursive: true, force: true });
console.log('prerender: wrote static HTML into dist/index.html');
