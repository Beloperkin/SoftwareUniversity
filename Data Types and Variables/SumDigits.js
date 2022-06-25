function SumDigits(num){

    let toString = String(num);
    let sumDigit = 0;
    for(let i = 0; i < toString.length; i++){
         sumDigit += Number(toString[i]);
    }

    console.log(sumDigit);
}

SumDigits();