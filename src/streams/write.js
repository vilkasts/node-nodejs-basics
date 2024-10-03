import { createWriteStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const write = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = join(__dirname, "files", "fileToWrite.txt");
  
  const writeStream = createWriteStream(filePath);
  
  const handleError = () => {
    throw new Error("Operation failed");
  }
  
  process.stdin
    .on("error", handleError)
    .pipe(writeStream)
    .on("error", handleError)
}

await write();