function ArrayManipulation(arguments){
    let myArr = arguments[0].split(' ');
    arguments.shift();

   
    let type = '';
    let count = 0;
    for(let i = 0;i < arguments.length;i++){
        let commandArr = arguments[i].split(' ');
        switch (commandArr[0]) {
            case `exchange`:
                    count = commandArr[1];
                    myArr = exchangeArr(myArr,count);
                    console.log(myArr.join(' '));
                break;
            case `max`:
                    type = commandArr[1];
                    maxElement(myArr,type);
                break;
            case `min`:
                    type = commandArr[1];
                    minElement(myArr,type);
                break;
            case `first`:
                    count = commandArr[1];
                    type = commandArr[2];
                    firstNumsOfType(myArr,count,type);
                break;
            case `last`:
                    count = commandArr[1];
                    type = commandArr[2];
                    lastNumsOfType(myArr,count,type);
                break;
        }
    }