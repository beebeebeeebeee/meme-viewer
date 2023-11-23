import "dotenv/config";

import { LocalDb } from "@infrastructure/db";
import { DbRepository } from "@adapter/repository";
import { ConfigService, SystemService } from "@adapter/service";
import { MemeViewerUsecase } from "@domain/usecase";

const localDb = new LocalDb();
const dbRepository = new DbRepository(localDb);
const configService = new ConfigService();
const systemService = new SystemService();
const memeViewerUsecase = new MemeViewerUsecase();

async function main() {
  memeViewerUsecase.getMeme(dbRepository, configService, systemService);
}

void main();
