function equalNums(arg){
    let myArr = [];
for(let i = 0;i < arg.length;i++){
    myArr[i] = Number(arg[i]);
}
let sumRight = 0;
let sumLeft = 0;
for(let i = 0;i < myArr.length;i++){
    sumRight = 0;
    sumLeft = 0;
    if(i == 0){
        sumLeft = 0;
    }else{
        for(let j = i-1;j >= 0;j--){
            sumLeft += myArr[j];
        }
    }

    if(i == (myArr.length-1)){
        sumRight = 0;
    }else{
        for(let y = i+1;y < myArr.length;y++){
            sumRight += myArr[y];
        }
    }
    if(sumLeft == sumRight){
        console.log(i);
        return;
    }
}
console.log(`no`);
}