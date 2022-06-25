function specialNumbers(num){

    let sumDig = 0;
    let isTrue = true;

    for(let i = 1; i <= num; i++){
        let toString = String(i);
        for(let x = 0; x < Number(toString.length); x++){
            
            sumDig += Number(toString[x]);
        }
        if(sumDig === 5 || sumDig === 7 || sumDig === 11){
            isTrue = true;
        }
        else{
            isTrue = false;
        }
        console.log(`${i} -> ${isTrue ? 'True' : 'False'}`);

        sumDig = 0;
    }

}

specialNumbers();