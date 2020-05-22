"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hamburger_1 = require("./hamburger");
class HamburgerBuilder {
    constructor() {
        this.hamburger = new hamburger_1.Hamburger();
    }
    getHamburger() {
        return this.hamburger;
    }
}
exports.HamburgerBuilder = HamburgerBuilder;
