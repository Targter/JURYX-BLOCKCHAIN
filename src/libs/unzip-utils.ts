import { ZipReader, BlobReader, TextWriter } from '@zip.js/zip.js';

export async function unzipFromUrl(zipUrl: string): Promise<Record<string, string>> {
    console.log("zipUrl:",zipUrl)
  const response = await fetch(zipUrl);
  console.log("r",response)
  const blob = await response.blob();
    console.log("blob:",blob)
  const zipReader = new ZipReader(new BlobReader(blob));
  const entries = await zipReader.getEntries();
    console.log(zipReader)
  const files: Record<string, string> = {};
  for (const entry of entries) {
    if (!entry.directory) {
      const content = await entry.getData?.(new TextWriter());
      files[entry.filename] = content;
    }
  }

  await zipReader.close();
  return files;
}
