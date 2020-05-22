"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hamburgerBuilder_1 = require("./hamburgerBuilder");
class DoubleCheeseHamburger extends hamburgerBuilder_1.HamburgerBuilder {
    constructor() {
        super();
    }
    setBread() {
        this.hamburger.setBread("Pan blanco");
    }
    setMeat() {
        this.hamburger.setMeat("1 Carne de Res");
    }
    setLettuce() {
        this.hamburger.setLettuce("2 Hojas de lechuga");
    }
    setChesse() {
        this.hamburger.setChesse("2 Rebanadas de queso");
    }
    setTomato() {
        this.hamburger.setTomato("2 Rebanadas de tomate");
    }
    setOnion() {
        this.hamburger.setOnion("2 Rebanadas de cebolla");
    }
}
exports.DoubleCheeseHamburger = DoubleCheeseHamburger;
