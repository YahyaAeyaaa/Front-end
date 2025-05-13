const nama = "yahya"
const usia = 21




function generateBiodata() {
    if ( usia > 0 & usia <= 10 ) {
        console.log("Halo anak");
    } else if ( usia > 10 && usia <= 20) {
        console.log("Halo Remaja");
    } else {
        console.log("Halo Dewasa");
        
    }
};

console.log(nama);
console.log(usia);
generateBiodata();



