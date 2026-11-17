import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(entry => entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]));
  return files.flat();
}

const files = await walk(root);
const htmlFiles = files.filter(file => file.endsWith(".html"));
const missing = new Set();
let references = 0;
for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  for (const match of html.matchAll(/(?:src|href)="(\/(?!\/)[^"#?]*)/g)) {
    references++;
    const target = path.join(root, decodeURIComponent(match[1]));
    let found = false;
    try {
      const info = await stat(target);
      found = info.isFile() || (info.isDirectory() && (await stat(path.join(target, "index.html"))).isFile());
    } catch {}
    if (!found) missing.add(`${path.relative(root, file)} -> ${match[1]}`);
  }
}
if (missing.size) {
  console.error("Missing exported links or assets:\n" + [...missing].join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Verified ${htmlFiles.length} HTML pages and ${references} local route/asset references. All present.`);
}
