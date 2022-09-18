

let palyndrome=(str)=>{
    let strMin=str.toLowerCase();
    if(strMin.split('').reverse().join('')===strMin){
        console.log(`${strMin} est un palyndrome`);
    }else {
        console.log(`${strMin} n'est un palyndrome`);
    }
}

palyndrome("kayK");

