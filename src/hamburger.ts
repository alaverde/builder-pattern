export class Hamburger {
    private bread:string = "";
    private meat:string = "";
    private lettuce:string = "";
    private chesse:string = "";
    private tomato:string = "";
    private onion:string = "";

    public setBread(bread:string){
        this.bread = bread;
    }

    public setMeat(meat:string){
        this.meat = meat;
    }

    public setLettuce(lettuce:string){
        this.lettuce = lettuce;
    }

    public setChesse(chesse:string){
        this.chesse = chesse;
    }

    public setTomato(tomato:string){
        this.tomato = tomato;
    }

    public setOnion(onion:string){
        this.onion = onion;
    }
}