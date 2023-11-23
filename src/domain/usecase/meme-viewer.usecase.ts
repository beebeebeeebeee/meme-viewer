import * as path from "path";
import { IConfigService, ISystemService } from "@domain/service";
import { IDbRepository } from "@domain/repository";

export class MemeViewerUsecase {
  public getMeme(
    dbService: IDbRepository,
    configService: IConfigService,
    systemService: ISystemService
  ) {
    const folderPath = configService.get("folderPath");

    const seenList = dbService.read();
    const imageList = systemService
      .readFiles(folderPath)
      .filter((e) => !seenList.includes(e.name))
      .sort((a, b) => b.time.getTime() - a.time.getTime());

    if (imageList.length === 0) {
      console.log("No image left, please refill some images.");
      return;
    }

    const selectedImage =
      imageList[Math.floor(Math.random() * imageList.length)];

    dbService.write([...seenList, selectedImage.name]);
    systemService.openFile(path.join(folderPath, selectedImage.name));
  }
}
