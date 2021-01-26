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
document.write(`Hasil konversi <b>celcius ke Fahrenheit</b> adalah: <b>${getFahrenheit(15)}</b><br>`); //Returns 59


//rumus Fahrenheit to celcius
function helperCelcius(number) {
    return number - 32;
};
//convert Fahrenheit to celcius
function getCelcius(fahrenheit){
    return helperCelcius(fahrenheit) * (5/9);
};
console.log(getCelcius(15)); //Returns -9.4
document.write(`Hasil konversi <b>Fahrenheit ke celcius</b> adalah: <b>${getCelcius(15)}</b><br>`); //Returns 59
