import { HamburgerBuilder } from './hamburgerBuilder';

export class DoubleCheeseHamburger extends HamburgerBuilder{
    
    constructor(){
        super();
    }

    public setBread(){
        this.hamburger.setBread("Pan blanco")
    }

    public setMeat(){
        this.hamburger.setMeat("1 Carne de Res");
    }

    public setLettuce(){
        this.hamburger.setLettuce("2 Hojas de lechuga");
    }

    public setChesse(){
        this.hamburger.setChesse("2 Rebanadas de queso");
    }

    public setTomato(){
        this.hamburger.setTomato("2 Rebanadas de tomate");
    }

    public setOnion(){
        this.hamburger.setOnion("2 Rebanadas de cebolla");
    }
}
