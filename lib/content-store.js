import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { getCollectionSchema } from "./content-schema";

const dataDirectory = path.join(process.cwd(), "data");
let writeQueue = Promise.resolve();

export async function readCollection(collection) {
  const schema = getCollectionSchema(collection);
  if (!schema) {
    throw new Error("Koleksi konten tidak dikenal.");
  }

  const filePath = path.join(dataDirectory, schema.file);
  const contents = await readFile(filePath, "utf8");
  const data = JSON.parse(contents);
  if (!Array.isArray(data)) {
    throw new Error(`Format ${schema.file} tidak valid.`);
  }
  return data;
}

async function writeCollection(collection, data) {
  const schema = getCollectionSchema(collection);
  if (!schema) {
    throw new Error("Koleksi konten tidak dikenal.");
  }

  await mkdir(dataDirectory, { recursive: true });
  const filePath = path.join(dataDirectory, schema.file);
  const temporaryPath = `${filePath}.tmp`;
  await writeFile(temporaryPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  await rename(temporaryPath, filePath);
}

export function updateCollection(collection, updater) {
  const operation = writeQueue.then(async () => {
    const currentData = await readCollection(collection);
    const nextData = await updater(currentData);
    await writeCollection(collection, nextData);
    return nextData;
  });
  writeQueue = operation.catch(() => undefined);
  return operation;
}
