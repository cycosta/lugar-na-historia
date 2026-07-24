import { toJpeg } from 'html-to-image';
import JSZip from 'jszip';

export const captureZip = async (
  nodes: (HTMLElement | null)[],
  filenames: string[],
  zipName: string,
  onProgress?: (done: number, total: number) => void,
) => {
  await document.fonts.ready;
  const zip = new JSZip();
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!node) continue;
    const dataUrl = await toJpeg(node, { quality: 0.92, pixelRatio: 1 });
    const base64 = dataUrl.split(',')[1];
    zip.file(filenames[i], base64, { base64: true });
    if (onProgress) onProgress(i + 1, nodes.length);
  }
  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = zipName;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 1000);
};
