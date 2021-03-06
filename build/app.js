"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const traditionalHamburger_1 = require("./traditionalHamburger");
const burger_1 = require("./burger");
const doubleCheeseHamburger_1 = require("./doubleCheeseHamburger");
const chickenHamburger_1 = require("./chickenHamburger");
const traditional = new traditionalHamburger_1.TraditionalHamburger();
const doubleCheese = new doubleCheeseHamburger_1.DoubleCheeseHamburger();
const chicken = new chickenHamburger_1.ChickenHamburger();
let burger = new burger_1.Burger(traditional);
burger.cookHamburger();
console.log(burger.getHamburger());
burger = new burger_1.Burger(doubleCheese);
burger.cookHamburger();
console.log(burger.getHamburger());
burger = new burger_1.Burger(chicken);
burger.cookHamburger();
console.log(burger.getHamburger());
