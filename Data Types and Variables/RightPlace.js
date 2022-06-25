function rightPlace(word1, char, word2){

    let res = '';

    for(let i = 0; i < word1.length; i++)
    {
        let currentChar = word1[i];
        if(word1[i] === '_'){
            res += char;
        }
        else{
            res += currentChar;
        }

    }

    if(res === word2){
        console.log('Matched');
    }
    else{
        console.log('Not Matched');
    }
}

rightPlace();