// //No. 1
// const luas= 20.5*30;
// const hargaparameterpersegi= luas * 1500000;
// const ppn= hargaparameterpersegi * 0.15;
// const total= hargaparameterpersegi + ppn;
// console.log("Total" + total)

// //No. 2
// const barang=[
// {nama:"beras",harga:10000,jumlah:5},
// {nama:"gula",harga:14000,jumlah:5},
// {nama:"telur",harga:20000,jumlah:2},
// {nama:"minyak goreng",harga:9000,jumlah:10}
// ]
// total=() => {
//     let jumlah= barang.reduce(function(value,element){
//         return value+element.harga*element.jumlah;
//     },0);
//     return(
//         new Intl.NumberFormat('de-De'),{
//             style:'currency',currency:'IDR' 
//         }
//     ).format(jumlah);
// }
// barang.map(
//     (bar,index) =>{
//         console.log(bar.nama + "\t" + bar.harga + "\t" + bar.jumlah);

//     }
// )
// console.log("Total harga :" +total() )

// //No. 2
// bmi= (bb,tb) =>{
//     const a= bb / Math.pow((tb/100),2);
//     var s;
//     if(a < 18.5){
//         return s= "kurus";
//     }else if(a>= 18.5 && a<= 24.9){
//         return s= "ideal";
//     }else if(a>= 25 ){
//         return s= "kelebihan berat badan";
//     }else{
//         return s= "obesitas";
//     }
    
// }
// console.log("Ukuran BMI :"+ bmi(90,170));

// //No. 4
// let x = 4
// for (let i=1; i<= 10; i++){
//     console.log(x)
//     x+=3
// }

//luas permukaan dan volume//
class lingkaran {
    constructor(r){
        this.r = r
    }

    luas = () => {
        return 3.14 * (this.r * this.r)
    }

    keliling = () => {
        return 3.14 * (this.r * 2)
    }
}

// Tabung
class tabung extends lingkaran{
    constructor(r,t){
        super(r)
        this.t = t
    }

    volume = () => {
        return (3.14 * (this.r * this.r)) * this.t
    }

    luaspermukaan = () => {
        return ((3.14 * (this.r * 2) * this.t) + (2 *(3.14 * (this.r * this.r))))
    }

    luasselimut = () => {
        return (3.14 * (this.r * 2)) * this.t
    }
}
// Print
let tabung1 = new tabung (7.5,50);
console.log("Gelas : ");
console.log("Volume : " + tabung1.volume());
console.log("Luas Permukaan : " + tabung1.luaspermukaan());
console.log("Luas Selimut : " + tabung1.luasselimut());
console.log("-----");

//Kerucut
class kerucut extends lingkaran{
    constructor(r,t,s){     
        super(r)            
        this.t = t
        this.s = s
    }

    volume = () => {
        return 3.14 * (this.r * this.r) * this.t / 3
    }

    luaspermukaan = () => {
        return (3.14 * (this.r * this.r)) + (3.14 * this.r * this.s)
    }

    luasselimut = () => {
        return 3.14 * this.r * this.s
    }

}

let kerucutt = new kerucut (10,40,22.3);
console.log("Traffic Cone : ");
console.log("Volume : " + kerucutt.volume());
console.log("Luas Permukaan : " + kerucutt.luaspermukaan());
console.log("Luas Selimut : " + kerucutt.luasselimut());
console.log("-----");

// Bola
class bola extends lingkaran{
    constructor(r){
        super(r)
    }

    volume = () => {
        return 4/3 * 3.14 * this.r * this.r * this.r
    }

    luaspermukaan = () => {
        return 4 * 3.14 * (this.r * this.r)
    }
}

let bolaa = new bola (15);
console.log("Bola : ");
console.log("Volume : " + bolaa.volume());
console.log("Luas Permukaan : " + bolaa.luaspermukaan());