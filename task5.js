let power = (x,n) =>{
    let result = 1
    for (let i=0; i<Math.abs(n); i++){
        result*=x;
    }
    return (n>=0)? result: 1/result;
}

console.log(power(2,5));
console.log(power(4,5));
console.log(power(2,-3));
console.log(power(2,0));