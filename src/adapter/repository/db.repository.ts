import { LocalDb } from "@infrastructure/db";
import { IDbRepository } from "@domain/repository";

export class DbRepository implements IDbRepository {
  private readonly localDb: LocalDb;

  constructor(localDb: LocalDb) {
    this.localDb = localDb;
  }

  public read(): string[] {
    return this.localDb.read();
  }

  public write(obj: string[]): string[] {
    return this.localDb.write(obj);
  }
}
