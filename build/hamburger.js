"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hamburger {
    constructor() {
        this.bread = "";
        this.meat = "";
        this.lettuce = "";
        this.chesse = "";
        this.tomato = "";
        this.onion = "";
    }
    setBread(bread) {
        this.bread = bread;
    }
    setMeat(meat) {
        this.meat = meat;
    }
    setLettuce(lettuce) {
        this.lettuce = lettuce;
    }
    setChesse(chesse) {
        this.chesse = chesse;
    }
    setTomato(tomato) {
        this.tomato = tomato;
    }
    setOnion(onion) {
        this.onion = onion;
    }
}
exports.Hamburger = Hamburger;
