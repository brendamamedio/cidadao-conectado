export class NoteModel {
  constructor(
    public id: number,
    public content: string,
    public fixed: boolean = false
  ) {}
}
