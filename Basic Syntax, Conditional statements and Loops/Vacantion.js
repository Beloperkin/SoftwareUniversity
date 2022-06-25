function vacantion(people, type, day){

    let totalPrice;

    if(type === 'Students'){
        if(day === 'Friday'){
            totalPrice = people * 8.45;
            if(people >= 30)
            {
                totalPrice *= 0.85;
            }
        }
        else if(day === 'Saturday'){
            totalPrice = people * 9.8;
            if(people >= 30)
            {
                totalPrice *= 0.85;
            }
        }
        else if(day === 'Sunday'){
            totalPrice = people * 10.46;
            if(people >= 30)
            {
                totalPrice *= 0.85;
            }
        }
    }

    if(type === 'Business'){
        if(day === 'Friday'){
            totalPrice = people * 10.9;
            if(people >= 100)
            {
                totalPrice = (people - 10) * 10.9;
            }
        }
        else if(day === 'Saturday'){
            totalPrice = people * 15.6;
            if(people >= 100)
            {
                totalPrice = (people - 10) * 15.6;
            }
        }
        else if(day === 'Sunday'){
            totalPrice = people * 16;
            if(people >= 100)
            {
                totalPrice = (people - 10) * 16;
            }
        }
    }

    if(type === 'Regular'){
        if(day === 'Friday'){
            totalPrice = people * 15;
            if(people >= 10  && people <= 20){
                totalPrice *= 0.95
            }
        }
        else if(day === 'Saturday'){
            totalPrice = people * 20;
            if(people >= 10  && people <= 20){
                totalPrice *= 0.95
            }
        }
        else if(day === 'Sunday'){
            totalPrice = people * 22.5;
            if(people >= 10  && people <= 20){
                totalPrice *= 0.95
            }
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}


vacantion(30,

    "Students",
    
    "Sunday")