import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const serverEntry = path.join(root, 'dist-server', 'entry-server.js');
const htmlPath = path.join(distDir, 'index.html');

const [{ render }, html] = await Promise.all([
  import(pathToFileURL(serverEntry).href),
  fs.readFile(htmlPath, 'utf8'),
]);

const rendered = render();
if (!rendered || !rendered.includes('Arnav Agarwal')) {
  throw new Error('Prerender output is empty or missing the portfolio heading.');
}

const updated = html.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`);
if (updated === html) {
  throw new Error('Could not find the React root in dist/index.html.');
}

await fs.writeFile(htmlPath, updated, 'utf8');
await fs.rm(path.join(root, 'dist-server'), { recursive: true, force: true });
console.log('Prerendered portfolio HTML into dist/index.html');
