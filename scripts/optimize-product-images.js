/**
 * Compress product JPGs in public/products (max width 1280, quality ~80).
 * Run: node scripts/optimize-product-images.js
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..', 'public', 'products');
const MAX_WIDTH = 1280;
const QUALITY = 82;

async function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else if (/\.(jpe?g)$/i.test(e.name)) files.push(full);
  }
  return files;
}

async function optimize(file) {
  const before = fs.statSync(file).size;
  const tmp = `${file}.opt`;
  await sharp(file)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(tmp);
  const after = fs.statSync(tmp).size;
  if (after < before * 0.98) {
    fs.renameSync(tmp, file);
    return { file, before, after, saved: true };
  }
  fs.unlinkSync(tmp);
  return { file, before, after: before, saved: false };
}

async function main() {
  if (!fs.existsSync(ROOT)) {
    console.log('No public/products folder.');
    return;
  }
  const files = await walk(ROOT);
  let totalBefore = 0;
  let totalAfter = 0;
  for (const f of files) {
    const r = await optimize(f);
    totalBefore += r.before;
    totalAfter += r.after;
    if (r.saved) {
      const pct = Math.round((1 - r.after / r.before) * 100);
      console.log(`OK ${path.relative(ROOT, r.file)} -${pct}%`);
    }
  }
  const mb = (n) => (n / 1024 / 1024).toFixed(2);
  console.log(`Done ${files.length} files: ${mb(totalBefore)} MB → ${mb(totalAfter)} MB`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
