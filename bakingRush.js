/*
You have initial energy 100 and initial coins 100. You will be given a string, representing the working day events. Each event is separated with '|' (vertical bar): "event1|event2|event3…"
Each event contains event name or item and a number, separated by dash("{event/ingredient}-{number}")
•	If the event is "rest": you gain energy, the number in the second part. But your energy cannot exceed your initial energy (100). Print: "You gained {0} energy.". 
After that, print your current energy: "Current energy: {0}.".
•	If the event is "order": You've earned some coins, the number in the second part. Each time you get an order, your energy decreases with 30 points.
o	If you have energy to complete the order, print: "You earned {0} coins.".
o	If your energy drops below 0, you skip the order and gain 50 energy points. Print: "You had to rest!".
•	In any other case you are having an ingredient, you have to buy. The second part of the event, contains the coins you have to spent and remove from your coins. 
o	If you are not bankrupt (coins <= 0) you've bought the ingredient successfully, and you should print ("You bought {ingredient}.")
o	If you went bankrupt, print "Closed! Cannot afford {ingredient}." and your bakery rush is over. 
If you managed to handle all events through the day, print on the next three lines: 
"Day completed!", "Coins: {coins}", "Energy: {energy}".
Input / Constraints
You receive a string, representing the dungeons rooms, separated with '|' (vertical bar): " event1|event2|event3…".
Each event contains event name or ingredient and a number, separated by dash("{event/ingredient}-{number}")
*/
function bakingRush(string){
    string = String(string);
    let initEnergy = 100;
    let initCoins = 100;
    let myArr = [];
    let arrOfEvents = [];
    arrOfEvents = string.split('|');
    for(let i = 0;i < arrOfEvents.length;i++){
        let event = arrOfEvents[i];
        event = event.replace(/[{}]/g, '');
        myArr = event.split('-');
        if(myArr[0] == 'rest'){
            let energyToAdd = Number(myArr[1]);
            let restoredEnergy = 0;
            if(initEnergy+energyToAdd > 100){
                restoredEnergy = energyToAdd - (initEnergy+energyToAdd-100);
                initEnergy = 100;
                console.log(`You gained ${restoredEnergy} energy.\nCurrent energy: ${initEnergy}.`);
            }else{
                let energyToAdd = Number(myArr[1]);
                initEnergy += energyToAdd;
                console.log(`You gained ${energyToAdd} energy.\nCurrent energy: ${initEnergy}.`);
            }
        }else if(myArr[0] == 'order'){
            if(0 > initEnergy-30){
                initEnergy += 50;
                console.log(`You had to rest!`);
            }else{
                let coinsEarned = Number(myArr[1]);
                initCoins += coinsEarned;
                initEnergy -= 30;
                console.log(`You earned ${coinsEarned} coins.`);
            }
        }else{
            let coinsToSpend = Number(myArr[1]);
            if(initCoins-coinsToSpend >= 0){
                initCoins -= coinsToSpend;
                console.log(`You bought ${myArr[0]}.`);
            }else{
                console.log(`Closed! Connot afford ${myArr[0]}.`);
                return;
            }
        }
    }
    console.log(`Day completed!\nCoins: ${initCoins}\nEnergy: ${initEnergy}`);
}
bakingRush("order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000");