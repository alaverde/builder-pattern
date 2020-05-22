"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Burger {
    constructor(hamburgerBuilder) {
        this.hamburgerBuilder = hamburgerBuilder;
    }
    getHamburger() {
        return this.hamburgerBuilder.getHamburger();
    }
    cookHamburger() {
        this.hamburgerBuilder.setBread();
        this.hamburgerBuilder.setMeat();
        this.hamburgerBuilder.setChesse();
        this.hamburgerBuilder.setLettuce();
        this.hamburgerBuilder.setTomato();
        this.hamburgerBuilder.setOnion();
    }
}
exports.Burger = Burger;
