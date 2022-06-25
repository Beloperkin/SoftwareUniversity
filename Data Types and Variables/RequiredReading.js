function requiredReading(pages, pagPerHour, days){

    let totalTime = pages / pagPerHour;
    let hourPerDay = totalTime / days;
    console.log(hourPerDay);
}

requiredReading();