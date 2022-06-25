function echoType(par){

    console.log(typeof(par));

    if(typeof(par) === 'string' || typeof(par) === 'number'){

        console.log(par);
    }
    else{
        console.log('Parameter is not suitable for printing');
    }
}

echoType();