"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hamburgerBuilder_1 = require("./hamburgerBuilder");
class ChickenHamburger extends hamburgerBuilder_1.HamburgerBuilder {
    constructor() {
        super();
    }
    setBread() {
        this.hamburger.setBread("Pan blanco");
    }
    setMeat() {
        this.hamburger.setMeat("1 Filete de Pechuga");
    }
    setLettuce() {
        this.hamburger.setLettuce("2 Hojas de lechuga");
    }
    setChesse() {
        this.hamburger.setChesse("1 Rebanada de queso");
    }
    setTomato() {
        this.hamburger.setTomato("2 Rebanadas de tomate");
    }
    setOnion() {
        this.hamburger.setOnion("2 Rebanadas de cebolla");
    }
}
exports.ChickenHamburger = ChickenHamburger;
