export type FileProps = {
  name: string;
  time: Date;
};

export class File {
  public readonly name: string;

  public readonly time: Date;

  constructor(props: FileProps) {
    const { name, time } = props;

    this.name = name;
    this.time = time;
  }
}
