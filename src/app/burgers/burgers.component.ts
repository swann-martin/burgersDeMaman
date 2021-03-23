import { Component, OnInit } from '@angular/core';
import { OurBurgers } from '../models/our-burgers';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.scss'],
})
export class BurgersComponent implements OnInit {
  constructor() {}
  basket: string = '';
  ngOnInit(): void {}

  jeanJack = new OurBurgers(
    'Le JeanJack',
    '/assets/jeanJack.jfif',
    15,
    'cheddar, oignons, buns, chameau'
  );
  leBordelais = new OurBurgers(
    'Le Bordelais',
    '/assets/leBordelais.jfif',
    13,
    'cheddar, oignons, buns, canard'
  );
  leDouble = new OurBurgers(
    'Le Double Burger',
    '/assets/leDouble.jfif',
    16,
    'cheddar, oignons, buns, boeuf'
  );
  elSalvador = new OurBurgers(
    'El Salvador',
    '/assets/elSalvador.jfif',
    15,
    'cheddar, oignons, buns, poulet'
  );

  allBurgers: OurBurgers[] = [
    this.jeanJack,
    this.leBordelais,
    this.leDouble,
    this.elSalvador,
  ];

  order(burger: OurBurgers) {
    this.basket += burger.name;
  }
}
