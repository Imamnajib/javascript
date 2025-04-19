var barang = prompt('tipe barang :  \nsapi , ayam , babi , wine' )

switch(barang){
    case 'sapi' :
    case 'ayam' :
        alert('makanan / minuman ini halal');
         break;

    case 'babi' :
    case 'wine' :
        alert('makanan /minuman ini haram');
        break;

    default :
    alert('barang yg anda sebutkan belum terdaftar di menu ??')
}