import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;
  public showName: boolean = true;
  public showAge: boolean = true;
  public showReset: boolean = false;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
    this.showName = false;
    this.showReset = true;
  }

  changeAge(): void {
    this.age = 25;
    this.showAge = false;
    this.showReset = true;
  }

  resetValues(): void {
    this.name = 'ironman';
    this.age = 45;
    this.showName = true;
    this.showAge = true;
    this.showReset = false;
  }
}
