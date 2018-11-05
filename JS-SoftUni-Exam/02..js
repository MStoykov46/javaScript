function dungeonDark(arrStrings){
    let initHealth = 100;
    let initCoins = 0;
    let arrOfEvents = [];
    arrOfEvents = arrStrings[0].split('|');
    for(let i = 0;i < arrOfEvents.length;i++){
        let myArr = [];
        myArr = arrOfEvents[i].split(' ');
        myArr[1] = Number(myArr[1]);
        switch (myArr[0]) {
            case 'potion':
                if(initHealth+myArr[1] <= 100){
                    initHealth += myArr[1];
                    console.log(`You healed for ${myArr[1]} hp.\nCurrent health: ${initHealth} hp.`);
                }else{
                    let restored = 100 - initHealth;
                    initHealth = 100;
                    console.log(`You healed for ${restored} hp.\nCurrent health: ${initHealth} hp.`);
                }
                break;
            case 'chest':
                initCoins += myArr[1];
                console.log(`You found ${myArr[1]} coins.`);
                break;
            default:
                if(initHealth-myArr[1] > 0){
                    initHealth -= myArr[1];
                    console.log(`You slayed ${myArr[0]}.`);
                }else{
                    console.log(`You died! Killed by ${myArr[0]}.\nBest room: ${i+1}`);
                    return;
                }
                break;
        }
    }
    console.log(`You've made it!\nCoins: ${initCoins}\nHealth: ${initHealth}`);
}