import { ISystemService } from "@domain/service";
import { exec } from "child_process";
import { File } from "@domain/entity";
import * as fs from "fs";
import * as path from "path";

export class SystemService implements ISystemService {
  openFile(filePath: string): void {
    exec(`open "${filePath}"`);
  }

  readFiles(folderPath: string): File[] {
    return fs.readdirSync(folderPath).map(
      (e) =>
        new File({
          name: e,
          time: fs.statSync(path.join(folderPath, e)).mtime,
        })
    );
  }
}
