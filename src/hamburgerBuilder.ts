import { Hamburger } from './hamburger';

export abstract class HamburgerBuilder{
    protected hamburger:Hamburger = new Hamburger();

    public getHamburger():Hamburger{
        return this.hamburger;
    }

    public abstract setBread():void;
    public abstract setMeat():void;
    public abstract setLettuce():void;
    public abstract setChesse():void;
    public abstract setTomato():void;
    public abstract setOnion():void;
}
