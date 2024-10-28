export class Person {
  //public name: string;
  //private address: string;

  constructor(
    public firstName: string,
    public lastName: string,
    private address: string = "No Address"
  ) {}
}

/*export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName, "New York");
  }
}*/

//Una forma de solvenar el no tener que realizar herencia pero si se modifica la clase Person
//se ve afectada la clase Hero por eso no se recomenienda utilizar esta forma

/*export class Hero {
  public person: Person;
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    this.person = new Person(realName);
  }
}*/

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {}
}

const tony = new Person("Tony", "Stark", "New York");

const ironman = new Hero("Ironman", 45, "Tony", tony);

console.log(ironman);
