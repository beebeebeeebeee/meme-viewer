export interface IDbRepository {
  read(): string[];
  write(obj: string[]): string[];
}
