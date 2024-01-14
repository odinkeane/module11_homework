function sumTwoNumbers(firstNumber){

    return function(secondNumber){
        return firstNumber + secondNumber;
    }
}
const findResult = sumTwoNumbers(5)
console.log(findResult(10));
console.log(findResult(15));