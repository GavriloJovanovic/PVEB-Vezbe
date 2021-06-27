export class Goal {
  constructor(
    public naziv : String,
    public opis : String,
    public vaznost : Number
  ) { }

  public getNaziv() {
    return this.naziv;
  }

  public getOpis() {
    return this.opis;
  }

  public getVaznost() {
    return this.vaznost;
  }
}
