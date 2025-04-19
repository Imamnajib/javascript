var jmlAngkot = 10;
var sedangBeroperasi = 6;


for(noAngkot = 1; noAngkot <= jmlAngkot ; noAngkot++){
    if(noAngkot <= sedangBeroperasi && noAngkot !== 5){
        console.log('no angkot ' + noAngkot + ' sedang beroperasi' )

    }else if(noAngkot === 8 || noAngkot === 10){
        console.log('no angkot ' + noAngkot + 'sedang lembur')
    }
    
    else{
        console.log('no angkot ' + noAngkot + ' sedang tidak beroperasi' )
    }

}