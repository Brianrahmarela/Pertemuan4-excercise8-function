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
document.write(`Umur kucing dihitung berdasarkan umur manusia adalah <b>${catAge(5)} tahun </b>`);