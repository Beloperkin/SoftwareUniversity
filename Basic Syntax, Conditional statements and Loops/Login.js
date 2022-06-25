function login(input){

    let index = 0;
    let password = '';
    let username = input[index];
    let counter = 0;
    

    for(let i = username.length - 1; i >= 0; i--)
    {
        password += username[i];
    }
    
    index++;
    let loginPass = input[index];

    while(loginPass !== password && counter < 3){

        console.log('Incorrect password. Try again.');
        index++;
        loginPass = input[index];
        counter++;

    }

    if(counter === 3 && loginPass !== password)
    {
        console.log(`User ${username} blocked!`);
    }
    else{
    console.log(`User ${username} logged in.`);
    }
}

login();
