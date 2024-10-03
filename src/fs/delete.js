import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { existsSync, promises } from "fs";

const remove = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = join(__dirname, "files", "fileToRemove.txt");
  
  if (!existsSync(filePath)) {
    throw new Error("FS operation failed");
  }
  
  try {
    await promises.unlink(filePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();