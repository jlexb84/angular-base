export class Person {
  public name: string;
  private address: string;

  constructor() {
    this.name = "Jonathan";
    this.address = "San Salvador";
  }
}

const ironman = new Person();

console.log(ironman);
