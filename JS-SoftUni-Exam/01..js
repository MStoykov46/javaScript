function partyProfit(arr){
    let companion = Number(arr[0]);
    let days = Number(arr[1]);
    let coins = 0;
    for(let i = 1;i <= days;i++){
        if(i % 10 == 0){ // every tenth
            companion -= 2;
        }

        if(i % 15 == 0){ // every fifteenth
            companion += 5;
        }

        coins += 50; // daily coins
        coins -= (companion*2); // for food daily

        if(i % 3 == 0){
            coins -= (companion*3);
        }
        if(i % 5 == 0){
            coins += (companion*20);
            if(i % 3 == 0){
                coins -= (companion*2);
            }
        }

    }
    console.log(`${companion} companions received ${Math.floor(coins/companion)} coins each.`);
}
partyProfit(["15","30"]);
