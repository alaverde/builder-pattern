import { HamburgerBuilder } from "./hamburgerBuilder";
import { Hamburger } from "./hamburger";

export class Burger {
    private hamburgerBuilder:HamburgerBuilder;

    constructor(hamburgerBuilder:HamburgerBuilder){
        this.hamburgerBuilder = hamburgerBuilder;
    }

    public getHamburger():Hamburger{
        return this.hamburgerBuilder.getHamburger();
    }

    public cookHamburger(){
        this.hamburgerBuilder.setBread();
        this.hamburgerBuilder.setMeat();
        this.hamburgerBuilder.setChesse();
        this.hamburgerBuilder.setLettuce();
        this.hamburgerBuilder.setTomato();
        this.hamburgerBuilder.setOnion();
    }
}