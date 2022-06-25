function amazingNumbers(num){

    let toString = String(num);
    let sumOfDigit = 0;

    for(let i = 0; i < toString.length; i++){
        let currentDigit = Number(toString[i]);
        sumOfDigit += currentDigit;
    }

    let toStringSum = String(sumOfDigit);

    let isAmazing = false;
    for(let i = 0; i < toStringSum.length; i++)
    {
        let currentDigit = Number(toStringSum[i]);
        if(currentDigit === 9){
            isAmazing = true;
        }

    }

    console.log(`${num} Amazing? ${isAmazing ? 'True' : 'False'}`);

    
}

amazingNumbers();