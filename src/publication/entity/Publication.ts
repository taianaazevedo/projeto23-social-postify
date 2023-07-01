export class Publication {
  constructor(
    private _image: string,
    private _title: string,
    private _text: string,
    private _dateToPublish: string,
    private _published: boolean,
    private _socialMedia: string,
    private readonly _userId: number,
  ) {}
  get userId(): number {
    return this._userId;
  }
  get socialMedia(): string {
    return this._socialMedia;
  }
  set socialMedia(value: string) {
    this._socialMedia = value;
  }
  get dateToPublish(): string {
    return this._dateToPublish;
  }
  set dateToPublish(value: string) {
    this._dateToPublish = value;
  }
  get published(): boolean {
    return this._published;
  }
  set published(value: boolean) {
    this._published = value;
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
  get image(): string {
    return this._image;
  }
  set image(value: string) {
    this._image = value;
  }
}
