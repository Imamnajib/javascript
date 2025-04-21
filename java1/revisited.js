// function declaration 

// function Anak(nama,energi){
//     let anak = [];
//     anak.nama = nama;
//     anak.energi = energi;

//     anak.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`halo ${nama} selamat makan`) 

//      anak.main = function(jam){
//      this.energi -= jam;
//      console.log(`halo ${nama} sedang bermain`)
//         }
       
//     }
// return anak;
    
// }

// let najib = Anak('najib',10)
// let imam = Anak('imam' ,20);

function Anak(nama,energi){
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`halo ${nama} selamat makan`) 

     this.main = function(jam){
     this.energi -= jam;
     console.log(`halo ${nama} sedang bermain`)
        }
       
    }
    
}

let najib = new Anak('najib', 10);