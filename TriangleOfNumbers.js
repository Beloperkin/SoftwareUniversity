function triangleOfNumbers(number){

    for(let row = 1; row <= number; row++)
    {
        let printLn = '';

        for(let col = 1; col <= row; col++)
        {
            printLn += `${row} `
        }

        console.log(printLn);
    }
}

triangleOfNumbers(5);