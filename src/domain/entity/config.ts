export type ConfigProps = {
  folderPath: string;
};

export class Config {
  public readonly folderPath: string;

  constructor(props: ConfigProps) {
    const { folderPath } = props;

    this.folderPath = folderPath;
  }
}
