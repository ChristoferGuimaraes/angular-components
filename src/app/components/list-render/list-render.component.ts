import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 2 },
    { name: 'Tom', type: 'Cat', age: 3 },
    { name: 'Frida', type: 'Dog', age: 6 },
    { name: 'Bob', type: 'Horse', age: 9 }
  ]

  animalDetails: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(animal: Animal): void {
    this.animalDetails = `The ${animal.type}, with name ${animal.name} has ${animal.age} years!`
  }

}
