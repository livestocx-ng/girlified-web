import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pdf } from 'pdf-to-img';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../..');
const researchDir = path.join(rootDir, 'public/research');
const previewsDir = path.join(researchDir, 'previews');

async function renderPdfPreview(pdfPath, outputPath) {
  const document = await pdf(pdfPath, { scale: 2 });

  for await (const image of document) {
    fs.writeFileSync(outputPath, image);
    return;
  }
}

async function main() {
  fs.mkdirSync(previewsDir, { recursive: true });

  const pdfFiles = fs
    .readdirSync(researchDir)
    .filter((file) => file.endsWith('.pdf'))
    .sort();

  for (const file of pdfFiles) {
    const pdfPath = path.join(researchDir, file);
    const outputPath = path.join(previewsDir, file.replace(/\.pdf$/i, '.jpg'));
    await renderPdfPreview(pdfPath, outputPath);
    console.log(`Generated ${path.relative(rootDir, outputPath)}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
