//tes di console
//SOAL NO 1

function pembeli (namaPembeli, produk) {
    // return "Terima kasih" + namaPembeli + "telah membeli produk" + produk;
    return `Terima kasih ${namaPembeli} telah membeli produk ${produk}`;
};
console.log(pembeli("brian", "makanan"));

//SOAL NO 2

//rumus celcius to Fahrenheit
function helperFahrenheit(number) {
    return number * (9/5);
};

//convert celcius to Fahrenheit
function getFahrenheit(celcius){
    return helperFahrenheit(celcius) + 32;
};
console.log(getFahrenheit(15)); //Returns 59


//rumus Fahrenheit to celcius
function helperCelcius(number) {
    return number - 32;
};
//convert Fahrenheit to celcius
function getCelcius(fahrenheit){
    return helperCelcius(fahrenheit) * (5/9);
};
console.log(getCelcius(15)); //Returns -9.4

//SOAL NO 3

//function hitung umur kucing
let catAge = humanYears => {
    var catYears = 0;

    if (humanYears === 1) {
        return 15
    }
    else if (humanYears === 2){
        return 24;
    } 
    // catYears =  15 + (humanYears * 4);
    catYears = (humanYears-2)* 4 + 24 ;
    // catYears ++;
        return catYears;
};

console.log(catAge(5));

//SOAL NO 4

//function ubah string huruf kecil single line block
const convertStringToLow = string => string.toLowerCase();
console.log(convertStringToLow("HURUF KECIL SEMUA"));
