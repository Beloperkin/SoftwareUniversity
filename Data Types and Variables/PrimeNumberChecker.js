function PrimeNumberChecker(num){

    let isPrime = true;

    for(let i = 1; i <= num; i++){
        if(num % i === 0 && i !== 1 && i !== num){
            isPrime = false;
            break;
        }
    }

    console.log(isPrime);
}

PrimeNumberChecker();