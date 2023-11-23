import * as fs from "fs";

export class LocalDb {
  private readonly DB_PATH = ".db";

  public read(): string[] {
    if (!fs.existsSync(this.DB_PATH)) {
      return this.write([]);
    }

    return JSON.parse(fs.readFileSync(this.DB_PATH).toString());
  }

  public write(obj: string[]): string[] {
    fs.writeFileSync(this.DB_PATH, JSON.stringify(obj));
    return obj;
  }
}
