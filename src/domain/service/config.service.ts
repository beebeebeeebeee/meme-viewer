import { Config } from "@domain/entity";

export interface IConfigService {
  get<T extends keyof Config>(key: T): Config[T];
}
