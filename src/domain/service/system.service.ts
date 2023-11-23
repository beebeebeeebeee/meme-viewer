import { File } from "@domain/entity";

export interface ISystemService {
  openFile(filePath: string): void;
  readFiles(folderPath: string): File[];
}
