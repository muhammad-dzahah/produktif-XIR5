// komentar //
// console.log("smk telkom malang");
console.log("RPL_TKJ");
console.log("Rekayasa Perangkat Lunak");
/* console.log('rekayasa perangkat lunak'); */
console.log('rekayasa perangkat lunak 2');


console.log("\n");


// kata kunci var //
var globalVar =100;
function f(){
    var localVar = 200;

    console.log("memanggil Variabel di dalam fungsi");
    console.log("globalVar:"+globalVar);
    console.log("localVar:"+localVar);
}

f();

console.log("\n Memanggil Variabel di luar fungsi");
console.log("globalVar:"+globalVar);


console.log("\n");


// kata kunci let //
for(var i=0; i<3; i++){
    console.log("Nilai i:"+i);
} 

console.log("Di luar blok pengulangan, nilai i adalah "+ i);


console.log("\n");


// konstanta //
const phi = 3.14;
let r =10

console.log("keliling Lingkaran :\n"+ (2*phi*r));


console.log("\n");


// (a) tipe number //
var desimal = 18;
var biner = 0b1010;
var oktal = 0o25;
var heksa = 0x24;

console.log(desimal);
console.log(biner);
console.log(oktal);
console.log(heksa);


console.log("\n");


// (b) tipe string //
var a=1, b=2, c=3;
console.log(a+"+"+b+"="+c);
console.log("\n interpolasi variabel:");
console.log(`${a}+${b}=${c}`);

var rpl = "Rekayasa \n"+
"Perangkat \n"+
"Lunak \n";

var tkj = "Teknik \n"+
"Komputer \n"+
"Jaringan \n";

console.log(rpl);
console.log(tkj);


console.log("\n");


// (c) Tipe Boolean //
var moklet = true;
while (!moklet){
    moklet = false;
}

console.log(moklet);


console.log("\n");


// Mengenal Array dalam Javascript //
var organ = ["OSIS","MPK","PUSTEL","Dewan Ambalan"];//array berindeks

// akses elemen menggunakan indeks 0,1,2...
console.log(organ[0]);
console.log(organ[1]);
console.log(organ[2]);
console.log("\n");

// array assosiatif
var osis = {'ketua':'a','wakil':'b','sekretaris':'c'};

console.log(osis['ketua']);
console.log(osis['wakil']);


console.log("\n");


// jenis array //
let n = 6;
let a = [20,20,10,10,20,20];
let total = 0.0;
for(let i=0; i<n; i++){
    a[i];
    total +=a[i];
}

let rata=total/a.length;

console.log(`\n Isi Array a: [${a}]`);
console.log(`\n Total Data: [${total}]`);
console.log(`\n Rata-Rata: [${rata}]`);


console.log("\n");


// array asosiatif //
let x = new Array();
x['rpl'] = 'Rekayasa Perangkat Lunak';
x['tkj'] = 'Teknik Komputer Jaringan';

for(key in x){
    console.log(key.toUpperCase()+'\t='+x[key]);
}


console.log("\n");


// array dua dimensi // erroooooooooooooorrrrrrrrrrrr
let siswa = [
    ['1','Adi','Malang'],
    ['2','Budi','Sidoarjo'],
    ['3','Dea','Surabaya']
];

console.log('No \t Nma Siswa \t Asal');
console.log('--- \t ------- \t ----');
for (let i = 0; i < siswa.length; i++) {
    for (let j = 0; j < siswa[i].length; j++) {
        console.log(siswa[i][j].toString())
        if (j < siswa[i].length-1) {
            console.log(' \t ');
        }
    }
    console.log();
}


console.log("\n");


// 1. operator penugasan //
var x = 1;
console.log(("Nilai X =" + x));
x += 1; // x= x+1
console.log("setelah ditambah 1:" + x);

x -= 1; // x= x-1
console.log("Nilai setelah dikurangi 1:" + x);

x /= 2; // x=x/2
console.log("Nilai setelahb dibagi 2" + x);


console.log("\n");


// 2. operator penugasan //
var a = 12;
var b = 6;

console.log(`${a} + ${b} = ${a+b}`);
console.log(`${a} - ${b} = ${a-b}`);
console.log(`${a} * ${b} = ${a*b}`);
console.log(`${a} / ${b} = ${a/b}`);
console.log(`${a} % ${b} = ${a%b}`);
console.log(`${a} ** ${b} = ${a**b}`);


console.log("\n");


// pembagian yang menghasilkan nilai bulat //
var a = 10;
var b = 4;

function PembagianBulat(a,b){
    var c=a/b;
    if (c >= 0) {
        return Math.floor(c);
    } else {
        return Math.ceil(c);
    }
}

console.log(`${a}/${b}=${PembagianBulat(a,b)}`);


console.log("\n");


// operator++ / increment //
var x;
console.log('Pre Increment:');
x = 27;
console.log(`x \t: ${x}`);
console.log(`++x \t: ${++x}`);
console.log(`x \t: ${x}`);

console.log("Post Increment");
x = 27;
console.log(`x \t: ${x}`);
console.log(`x++ \t: ${x++}`);
console.log(`x \t: ${x}`);


console.log("\n");


// Operator Relasional //
var a=10, b=20;
console.log(`a \t: ${a}`);
console.log(`a \t: ${b}`);
console.log(`a==b \t: ${a==b}`);
console.log(`a!=b \t: ${a!=b}`);
console.log(`a<b \t: ${a<b}`);
console.log(`a>b \t: ${a>b}`);
console.log(`a<=b \t: ${a<=b}`);
console.log(`a>=b \t: ${a>=b}`);

// operator rasional dalam blok pemilihan 
if (a<b) {
    console.log(`a lebih kecil dari b`);
}

// operator relasional dalam blok pengulangan 
var i = a;
while (i<=b){
    process.stdout.writer(`${i}`); 
    i +=2
}

// operator bitwise //
var a=5, b=28;

console.log(`a \t:${a}`)
console.log(`b \t:${b}`)
console.log(`a & b \t:${a & b}`)
console.log(`a | b\t:${a | b}`)
console.log(`a ^ b\t:${a ^ b}`)
console.log(`~a \t:${~a}`)

console.log(`a \t:${a}`)
console.log(`a>>1 \t:${a>>1}`)
console.log(`a>>2 \t:${a>>2}`)
console.log(`a<<1 \t:${a<<1}`)
console.log(`a<<2 \t:${a<<2}`)


console.log("\n");


// operator string //
var data = ['apel','durian','jeruk'];

var s='[';
for (let i = 0; i < data.length; i++) {
    s += '\''+data[i]+'\'';
    if (i<data.length-1) s+=',';
}
s+=']';
console.log('s: '+ s);


console.log("\n");


// operator kondisional //
var kehadiran = 5;
predikat = (kehadiran > 10) ? "naik" : "tidak naik";
console.log(predikat);


console.log("\n");


// operator instanceof //
var a = 2020;
var b = new String("RPL");
var pilih = new Boolean;
var mapel =["siskom","kjd","iot","siskomdig"];

console.log(typeof mapel);
console.log(typeof a);
console.log(typeof b);
console.log(0 in mapel);
console.log(5 in mapel);
console.log(b instanceof String);
console.log(a instanceof Number);
console.log(pilih instanceof Boolean);


console.log("\n");


// if //
var x= 6;
var y= 8;
var z;

if (y===0) {
    console.log('kesalahan: Nilai y tidak boleh nol');
    process.exit(1);
}

z=x/y;
console.log(`${x}/$${y}=${z}`);


console.log("\n");


// switch //
var ruang = 13;
var kelas;

switch (ruang) {
    case 1 : kelas = "X RPL 1" ; break;
    case 2 : kelas = "X RPL 2" ; break;
    case 3 : kelas = "X RPL 3" ; break;
    case 4 : kelas = "X RPL 4" ; break;
    case 5 : kelas = "X RPL 5" ; break;
    case 6 : kelas = "X RPL 6" ; break;
    case 7 : kelas = "X RPL 7" ; break;
    case 8 : kelas = "X TKJ 1" ; break;
    case 9 : kelas = "X TKJ 2" ; break;
    case 10 : kelas = "X TKJ 3" ; break;
    case 11 : kelas = "X TKJ 4" ; break;
    case 12 : kelas = "X TKJ 5" ; break;
    case 13 : kelas = "X TKJ 6" ; break;
    default:{
        console.log("tidak termasuk kelas 1");
    }
}

console.log(`kelas ${kelas} adalah kelas ${ruang}`);


console.log("\n");


// while //
let i=1;
while ( i<=29){
    console.log(`Angkatan Moklet : ${i}`)
    i++;
}

console.log("\n");
let data=[40,38,40,37];
let jumlah = 0;
let x = 0;

while (x < data.length) {
    jumlah += data[x];
    x++;
}

console.log(`jumlah seluruh siswa : ${jumlah}`);


console.log("\n");


// do while //
let data = [10,20,30,40,50,60];
let jumlah;
let x;

jumlah = 0;
x = 0;
do {
    jumlah += data[x];
    x++;
}while (x < data.length);

console.log(`jumlah data = ${jumlah}`)


console.log("\n");


// for //
let data = [10,20,30,40,50,60];
let jumlah;

jumlah = 0;
let i;
for(i=0;i<data.length;i++){
    jumlah+= data[i];
}

console.log(`jumlah data ${jumlah}`);


console.log("\n");


// pengulang bersarang //
let siswa = [
    ['1215','Adi','Malang'],
    ['1216','Budi','Tulungagung'],
    ['1217','Doni','Tuban'],
]

for (let i = 0; i < siswa.length; i++) {
    for (let j = 0; j < siswa.length; j++) {
        process.stdout.write(siswa[i][j].toString());
        if (j<siswa[i].length-1) {
            process.stdout.write('\t');
        }    
    }
    console.log();
}


console.log("\n");


// perintah for //
let data = [40,40,40,38,42,41];

for(let indeks in data){
    console.log(`data[${indeks}]=${data[indeks]}`);
}


console.log("\n");


let data = {'rpl1':'40','rpl2':'38','rpl3':'41'};

for(let kunci in data){
    console.log(`${kunci} \t=${data[kunci]}`);
}


console.log("\n");


// for-of //
let data =[12,14,16,18,20,22];

for (let elemen of data) {
    console.log(elemen);
}


console.log("\n");


// perintah break //
for(let i = 0; i < 10; i++){
    if (i===4) break;
    process.stdout.write(i+'');
}


console.log("\n");


// perintah continue //
for (let i = 0; i < 10; i++) {
    if (i%2===0) continue;
    process.stdout.write(i+'');
}

//perintah return;
function kali(a,b){
    c=a*b;
    return c;
}
let angka1=10,angka2=20, hasil;

hasil=kali(angka1,angka2);
console.log(`${angka1}x${angka2}=${hasil}`);

//fungsi;
let readline=require('readline-sync');

let a= parseFloat(readline.question('masukkan nilai A'));
let b= parseFloat(readline.question('masukkan nilai B'));
let c;

if(b===0){
    console.log('kesalahan: nilai b tidak boleh 0');
    process.exit(1);
}
c=a/b;
console.log(`${a}/${b}=${c}`);

//function kali;
function kali(a,b){
    c=a*b;
    return c;
}

/*function kali(a,b){
    return a*b;
}*/

//fungsi cetak;
function cetak(x,y){
    for(let i=0;i<y;i++);
}

//memanggil fungsi;
let hasil;
hasil=kali(10,20);

//fungsi 2;
var readline=require('readline-sync');
function kali(a,b){
    return a*b;
}

let a= parseFloat(readline.question('masukkan nilai A'));
let b= parseFloat(readline.question('masukkan nilai B'));
let c;

c=kali(a,b);
console.log(`${a}x${b}=${c}`);
/*console.log(`${a}x${b}=${kali(a,b)}`);*/

//function tukar;
function tukar(a,b){
    let c=a;
    a=b;
    b=c;
}
let x=100, y=200;

console.log('sebelum ditukar');
console.log(`x: ${x}`);
console.log(`y: ${y}`);

tukar(x,y);

console.log('\n setelah ditukar');
console.log(`x: ${x}`);
console.log(`y: ${y}`);

//fungsi inkremen;
function increment(a);{
a.x +=1;
}
let obj = new Object();
obj.x=10;

console.log('sebelum dinaikkan nilainya;');
console.log(`obj.x:${obj.x}`);

increment (obj);

console.log('\n sebelum dinaikkan nilainya;');
console.log(`obj.x:${obj.x}`);

//parameter dgn nilai default;
function cetak(s,n=3,newline=true){
   for(let i=0;i<n;i++){
       process.stdout.write(s);
       if(newline)process.stdout.write('\n');
   }
}

console.log('memanggil fungsi dengan satu parameter:');
cetak('RPL');

console.log('\n memanggil fungsi dengan 2 parameter:');
cetak('RPL',2);

console.log('memanggil fungsi dengan satu parameter:');
cetak('RPL',1,true);
cetak('TKJ',1,false);

//fungsi sum;
function sum(a){
    if(!typeof a==='array'){
        console.log('kesalahan: parameter harus bertipe array');
        return;
    }
    let total =0.0;
    for(let elemen of a){
        total += elemen;
    }
    return total;
}
console.log('sum([10,20]):'+sum([10,20]));
console.log('sum[10,20,30]):'+sum([10,20,30]));

//rest parameter;
function sum(...a){
    let total =0.0
    for(let elemen of a){
        total +=elemen;
    }
    return total;
}
console.log('sum(10,20):'+sum(10,20));
console.log('sum(10,20,30):'+sum(10,20,30));


//fungsi tanpa nama;
let readline=require('readline-sync');
let tambah=function(a,b){
    returns a+b;
}
let a=parseFloat(readline.question("masukkan nilai A:"));
let b=parseFloat(readline.question("masukkan nilai B:"));

let hasil=tambah(a,b);
console.log(`${a}+${b}=${hasil}`);

//fungsi callback;
let readline=require('readline-sync');
function tambah(a,b){
    return a+b;
}
function kurang(a,b){
    return a-b;
}
function kali(a,b){
    return a*b;
}
function bagi(a,b){
    return a/b;
}
function hitung(a,b,callback){
    return callback(a,b);
}
let a=parseFloat(readline.question("masukkan nilai A:"));
let b=parseFloat(readline.question("masukkan nilai B:"));

console.log(`${a}+${b}=${hitung(a,b,tambah)}`);
console.log(`${a}+${b}=${hitung(a,b,kurang)}`);
console.log(`${a}+${b}=${hitung(a,b,kali)}`);
console.log(`${a}+${b}=${hitung(a,b,bagi)}`);

//fungsi callback;
var readline=require('readline-sync');
function hitung(a,b,callback){
    return callback(a,b);
}

let a=parseFloat(readline.question("masukkan nilai A:"));
let b=parseFloat(readline.question("masukkan nilai B:"));

console.log(`${a}+${b}=`+hitung(a,b,function(){return a+b;}));
console.log(`${a}-${b}=`+hitung(a,b,function(){return a-b;}));
console.log(`${a}*${b}=`+hitung(a,b,function(){return a*b;}));
console.log(`${a}/${b}=`+hitung(a,b,function(){return a/b;}));

//fungsi didalam fungsi lain;
let readline=require('require-sync');
function hipotenusa(a,b){
    function kuadrat(x){
        return x*x;
    }
    return c=Math.sqrt(kuadrat(a)+kuadrat(b));
}
console.log('menghitung sisi miring segitiga siku-siku');
let a=parseFloat(readline.question("masukkan nilai alas:"));
let b=parseFloat(readline.question('masukkan nilai tinggi:'));

var c=hipotenusa(a,b);
console.log(`sisi miring = ${c}`);

//membuat tipe objek;
function segitiga(a,t){
    this.alas=a;
    this.tinggi=t;
}
segitiga.prototype.luas=function(){
    return this.alas*this.tinggi/2;
}

//mendefinisikan properti;
function segitiga(a,t){
    this.alas=a;
    this.tinggi=t;
}

//mendefinisikan metode;
segitiga.prototype.luas=function(){
    return this.alas*this.tinggi/2;

    //membuat dan menggunakan objek;
    function segitiga(a,t){
        this.alas=a;
        this.tinggi=t;
    }
    segitiga.prototype.luas=function(){
        return this.alas*this.tinggi/2;
    }
    let obj = new segitiga(4,5);

    console.log("setelah nilai properti diubah:");
    console.log(`obj.alas\t:${obj.alas}`);
    console.log(`obj.tinggi\t:${obj.tinggi}`);
    console.log(`obj.luas()\t:${obj.luas()}`);
    
//sintaks alternativ:
let obj={
    alas:4,
    tinggi:5,
    luas: function(){
        return this.alas*this.tinggi/2;
    }
};
    console.log("sebelum nilai properti diubah:");
    console.log(`obj.alas\t:${obj.alas}`);
    console.log(`obj.tinggi\t:${obj.tinggi}`);
    console.log(`obj.luas()\t:${obj.luas()}`);

    obj.alas=10;
    obj.tingi=12;

    console.log("setelah nilai properti diubah:");
    console.log(`obj.alas\t:${obj.alas}`);
    console.log(`obj.tinggi\t:${obj.tinggi}`);
    console.log(`obj.luas()\t:${obj.luas()}`);


    //kelas;
    class segitiga{
        constructor(a,t){
            this.alas=a;
            this.tinggi=t;
        }
        luas(){
            return this.alas*this.tinggi/2;
        }
    }

    //membuat objek;
    let a=parseFloat(readline.question("masukkan nilai alas:"));
    let b=parseFloat(readline.question("masukkan nilai tinggi:"));

    let obj=new segitiga(a,t);

    console.log("setelah nilai properti diubah:");
    console.log(`obj.alas\t:${obj.alas}`);
    console.log(`obj.tinggi\t:${obj.tinggi}`);
    console.log(`obj.luas()\t:${obj.luas()}`);

//metode static;
let readline=require('require-sync');

class segitiga{
    constructor(a,t){
        this.alas=a;
        this.tinggi=t;
    }
    luas(){
        return this.alas*this.tinggi/2; 
    }

    static buatObjek(daftarparameter){
        return new segitiga(a,t)
    }
}
    let a=parseFloat(readline.question("masukkan nilai alas:"));
    let b=parseFloat(readline.question("masukkan nilai tinggi:"));

    let obj=segitiga.buatObjek(a,t);

    console.log("setelah nilai properti diubah:");
    console.log(`obj.alas\t:${obj.alas}`);
    console.log(`obj.tinggi\t:${obj.tinggi}`);
    console.log(`obj.luas()\t:${obj.luas()}`);

//contoh lain;
let readline=require('require-sync');
class aritmatika{
    static tambah(a,b){
        return a+b;
    }
}
    let a=parseFloat(readline.question("masukkan nilai a:"));
    let b=parseFloat(readline.question("masukkan nilai b:"));

    console.log(`${a}+${b}=${aritmatika.tambah(a,b)}`);

    //pewarisan;
    let readline=require('require-sync');

    class segitiga{
        constructor(a,t){
            this.alas=a;
            this.tinggi=t;
        }
        luas(){
            return this.alas*this.tinggi/2; 
        }
        cetakPropert(){
            console.log(`alas\t:${this.alas}`);
            console.log(`tinggi\t:${this.tinggi}`);
        }
    }

class segitigawarna extends segitiga{
    constructor(a,t,w){
        super(a,t);
        this.warna;
    }
    cetakPropert(){
        SourceBuffer.cetakPropert();
        console.log(`warna\t:${this.warna}`);
    }
}
let obj=new segitigawarna(a,t,'merah');
    obj.cetakPropert;
    console.log(`obj.luas()\t:${obj.luas()}`);

//penanganan eksepsi;
let readline=require('require-sync');
class divisionbyzeroerror extends error{
    constructor(msg);{
    this.name=this.constructor.name;
    this.message=msg;
}
getmessage(){
    return this.message;
   }
}

    let a=parseFloat(readline.question("masukkan nilai a:"));
    let b=parseFloat(readline.question("masukkan nilai b:"));

    try{
        if(b==0){
            throw new divisionbyzeroerror(
                'nilai b tidak boleh 0'
            );
        }
            let c=a/b;
            console.log(`${a}/${b}=${c}`)
            
        }
            catch(e){
            console.log(e.getmessage());
        }
    
