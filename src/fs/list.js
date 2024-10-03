import { readdir } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const list = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const folderPath = join(__dirname, "files");
  
  try {
    const filesNamesArray = await readdir(folderPath);
    console.log(filesNamesArray);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();