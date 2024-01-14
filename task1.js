function determinateEvenAndOddNumber() {
    let array7 = [0, 5, 126, 7, 534, NaN, undefined, null, "123", false, Infinity, -Infinity, []];
    let odd = 0;
    let even = 0;
    let zero = 0;
    array7.map((val) => {
        if (typeof val == "number") {
            switch (val) {
                case 0:
                    zero++;
                    break;
                case NaN:
                case Infinity:
                case -Infinity:
                    break;
                default:
                    if (val % 2) {
                        console.log(`${val} : odd`);
                        odd++;
                    }
                    else {
                        console.log(`${val} : even`);
                        even++;
                    }
            }
        }
        else {
            console.log(`${val} : ${typeof val}`)
        }
    });
}