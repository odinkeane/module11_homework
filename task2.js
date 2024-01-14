function isSimpleNumber(number){
    if (number === 0 || number === 1){
        return false;
    }
    if (number > 1000 || number < 0){
        return "Данные неверны";
    }
    for (let i = 2; i<number; i++){
        if (number%i == 0){
            return false;
        }
    }
    return true;
}

console.log(isSimpleNumber(7));