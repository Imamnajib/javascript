var jmlAngkot = 10;
var angkotBeroperasi = 9;
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi){
    console.log('angkot no ' + noAngkot + ' sedang beroperasi')
noAngkot++;
}

for(var noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++){
    console.log('angkot no ' + noAngkot + ' sudah tidak beroperasi')
} 