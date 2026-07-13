import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const repoRoot = path.resolve(process.cwd(), '..');
const specRoot = path.join(repoRoot, 'jacdac-ts/jacdac-spec/devices');
const distPath = path.join(repoRoot, 'astro-starlight/public/images/devices');

const CATALOG_WIDTH = 800;
const CATALOG_HEIGHT = 600;
const PREVIEW_WIDTH = 480;
const PREVIEW_HEIGHT = 360;
const FULL_WIDTH = 1024;
const FULL_HEIGHT = 768;
const LAZY_SIZE = 96;
const DEVICE_LIST_WIDTH = 240;
const DEVICE_LIST_HEIGHT = 180;
const AVATAR_SIZE = 64;

const placeholderImage = sharp({
  create: {
    width: FULL_WIDTH,
    height: FULL_HEIGHT,
    channels: 4,
    background: { r: 240, g: 240, b: 240, alpha: 1 },
  },
});

function identifierToUrlPath(id) {
  if (!id) return id;
  const escape = (s) => s.replace(/[.:]/g, '').toLowerCase();
  const parts = id.split(/-/g);
  if (parts.length === 1) return id.replace(/[.:]/g, '').toLowerCase();
  return `${parts.slice(0, -1).map(escape).join('-')}/${escape(parts[parts.length - 1])}`;
}

function walkDevices(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walkDevices(entryPath, out);
    else if (entry.name.endsWith('.json')) out.push(entryPath);
  }
  return out;
}

async function main() {
  fs.mkdirSync(distPath, { recursive: true });
  const devices = walkDevices(specRoot).map((filePath) => {
    const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return raw;
  });

  let copied = 0;
  for (const device of devices) {
    if (!device?.id) continue;
    const relative = `${identifierToUrlPath(device.id)}.jpg`;
    const src = path.join(specRoot, relative);
    const sourceImage = fs.existsSync(src) ? sharp(src) : placeholderImage.clone();

    const base = identifierToUrlPath(device.id);
    const outputDir = path.join(distPath, path.dirname(base));
    fs.mkdirSync(outputDir, { recursive: true });
    const outputs = [
      { suffix: '.catalog.jpg', width: CATALOG_WIDTH, height: CATALOG_HEIGHT },
      { suffix: '.preview.jpg', width: PREVIEW_WIDTH, height: PREVIEW_HEIGHT },
      { suffix: '.full.jpg', width: FULL_WIDTH, height: FULL_HEIGHT },
      { suffix: '.lazy.jpg', width: LAZY_SIZE, height: LAZY_SIZE },
      { suffix: '.list.jpg', width: DEVICE_LIST_WIDTH, height: DEVICE_LIST_HEIGHT },
      { suffix: '.avatar.jpg', width: AVATAR_SIZE, height: AVATAR_SIZE },
    ];

    for (const output of outputs) {
      await sourceImage.clone()
        .resize(output.width, output.height, { fit: sharp.fit.cover })
        .toFormat('jpeg')
        .toFile(path.join(outputDir, `${path.basename(base)}${output.suffix}`));
    }
    copied += 1;
  }

  console.log(`Generated device assets for ${copied} devices`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
