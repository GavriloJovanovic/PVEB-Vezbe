export class Step {
  constructor(
    public redniBroj : Number,
    public opis : String,
  ) { }

  public getOpis() {
    return this.opis;
  }

  public getRedniBroj() {
    return this.redniBroj;
  }
}
