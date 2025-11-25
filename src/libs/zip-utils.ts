import { ZipWriter, BlobWriter } from '@zip.js/zip.js';

interface WebKitFile extends File {
  webkitRelativePath: string;
}

export async function createZip(files: File[]): Promise<Blob> {
  const zipWriter = new ZipWriter(new BlobWriter('application/zip'));

  await Promise.all(files.map(async file => {
    const path = (file as WebKitFile).webkitRelativePath;
    return zipWriter.add(path, file.stream());
  }));

  return zipWriter.close();
}