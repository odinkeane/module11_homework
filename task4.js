let a = 5;
let b = 15;
let fromAtoB = setInterval(() => {
    console.log(a)
    if(a + 1 <= b) {
        a++; 
        
    } else {
        clearInterval(fromAtoB);
    } 
}, 1000);