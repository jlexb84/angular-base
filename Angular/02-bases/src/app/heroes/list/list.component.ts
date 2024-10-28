import { Component } from '@angular/core';

interface Hero {
  name: string;
  age: number;
}

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroes: Hero[] = [
    { name: 'Spiderman', age: 25 },
    { name: 'Ironman', age: 45 },
    { name: 'Hulk', age: 50 },
    { name: 'She Hulk', age: 29 },
    { name: 'Thor', age: 40 },
  ];

  public deletedHero?: Hero;

  removeLastHero(): void {
    this.deletedHero = this.heroes.pop();
  }
}
