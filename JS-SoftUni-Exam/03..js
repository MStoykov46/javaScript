function questJournal(arr){
    let arrOfQuests = [];
    arrOfQuests = arr[0].split(', ');
    for(let i = 1;i < arr.length;i++){
        if(arr[i] == 'Retire!'){
            console.log(arrOfQuests.join(', '));
            return;
        }else{
            let myArr = [];
            myArr = arr[i].split(' - ');
            switch (myArr[0]) {
                case 'Start':
                let newCheck = false;
                    for(let j = 0;j < arrOfQuests.length;j++){
                        if(arrOfQuests[j] == myArr[1]){
                            newCheck = true;
                        }
                    }
                    if(newCheck == false){
                        arrOfQuests.push(myArr[1]);
                    }
                    break;
                case 'Complete':
                    for(let j = 0;j < arrOfQuests.length;j++){
                        if(arrOfQuests[j] == myArr[1]){
                            arrOfQuests.splice(j,1);
                        }
                    }
                    break;
                case 'Side Quest':
                let anotherCheck = false;
                let anotherArr = [];
                anotherArr = myArr[1].split(':');
                    for(let j = 0;j < arrOfQuests.length;j++){
                        if(anotherArr[0] == arrOfQuests[j]){
                            anotherCheck = true;
                            for(let y = 0;y < arrOfQuests.length;y++){
                                if(arrOfQuests[y] == anotherArr[1]){
                                    anotherCheck = false;
                                }
                            }
                            if(anotherCheck == false){
                                arrOfQuests.splice(j,0,anotherArr[1]);
                            }
                            break;
                        }
                    }
                    break;
                case 'Renew':
                    for(let j = 0;j < arrOfQuests.length;j++){
                        if(arrOfQuests[j] == myArr[1]){
                            let help = arrOfQuests[j];
                            arrOfQuests.splice(j,1);
                            arrOfQuests.push(help);
                        }
                    }
                    break;
            }
        }
    }
}
questJournal([ 'Hello World, If else',
'Complete - Homework',
'Side Quest - If else:Switch',
'Renew - Hello World',
'Retire!' ]
);