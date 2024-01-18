function calculateVacationPrice(numberOfPeople, typeOfPeople, dayOfWeek){
    `use stict`;
    let pricePerNight = 0;

    if( typeOfPeople === "Students"){
        switch(dayOfWeek){
            case "Friday": pricePerNight = 8.45; break;
            case "Saturday": pricePerNight = 9.80; break;
            case "Sunday": pricePerNight = 10.46; break;
            
        }
        if (numberOfPeople >= 30) {
            pricePerNight *=0.85;
            console.log(`Total price: ${(pricePerNight * numberOfPeople).toFixed(2)}`);
        }
        else{
            console.log(`Total price: ${(pricePerNight * numberOfPeople).toFixed(2)}`);
        }
    }
    else if (typeOfPeople === "Business"){
        switch(dayOfWeek){
            case "Friday": pricePerNight = 10.90; break;
            case "Saturday": pricePerNight = 15.60; break;
            case "Sunday": pricePerNight = 16; break;
        }
        if (numberOfPeople >= 100) {
            console.log(`Total price: ${(pricePerNight * (numberOfPeople-10)).toFixed(2)}`);
        }
        else{
            console.log(`Total price: ${(pricePerNight * numberOfPeople).toFixed(2)}`);
        }
    }
    else if (typeOfPeople === "Regular"){
        switch(dayOfWeek){
            case "Friday": pricePerNight = 15; break;
            case "Saturday": pricePerNight = 20; break;
            case "Sunday": pricePerNight = 22.50; break;
        }
        if (numberOfPeople >= 10 && numberOfPeople <= 20){
            pricePerNight *=0.95;
            console.log(`Total price: ${(pricePerNight * numberOfPeople).toFixed(2)}`);
        }
        else{
            console.log(`Total price: ${(pricePerNight * numberOfPeople).toFixed(2)}`);
        }

    }
    
       
}
calculateVacationPrice(100,"Regular","Saturday")