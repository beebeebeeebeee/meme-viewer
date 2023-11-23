import { IConfigService } from "@domain/service";
import { Config } from "@domain/entity";

export class ConfigService implements IConfigService {
  private readonly config: Config;

  constructor() {
    const { FOLDER_PATH: folderPath } = process.env;

    this.config = new Config({
      folderPath,
    });
  }

  get<T extends keyof Config>(key: T): Config[T] {
    return this.config[key];
  }
}
