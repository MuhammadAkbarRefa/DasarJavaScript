class PersegiPanjang{
    constructor(p,l){
        this.panjang = p 
        this.lebar = l
    }

    luas = () => {
        return this.panjang * this.lebar
    }

    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }
}

let tanah = new PersegiPanjang(10,50)
console.log("Luas tanah = " + tanah.luas());
console.log("Keliling tanah = " + tanah.keliling());