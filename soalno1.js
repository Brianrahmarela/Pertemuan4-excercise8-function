//SOAL NO 1
function pembeli (namaPembeli, produk) {
    // return "Terima kasih" + namaPembeli + "telah membeli produk" + produk;
    return `Terima kasih <b>${namaPembeli} </b>telah membeli produk <b>${produk}</b>`;
};
document.write(pembeli("brian", "makanan"));
