
import { TraditionalHamburger } from './traditionalHamburger';
import { Burger } from './burger';
import { DoubleCheeseHamburger } from './doubleCheeseHamburger';
import { ChickenHamburger } from './chickenHamburger';

const traditional:TraditionalHamburger = new TraditionalHamburger();
const doubleCheese:DoubleCheeseHamburger = new DoubleCheeseHamburger();
const chicken:ChickenHamburger = new ChickenHamburger();

let burger:Burger = new Burger(traditional);
burger.cookHamburger();
console.log(burger.getHamburger());

burger = new Burger(doubleCheese);
burger.cookHamburger();
console.log(burger.getHamburger());


burger = new Burger(chicken);
burger.cookHamburger();
console.log(burger.getHamburger());
