//max number and its index *need optimization*
function maxNumb(arg){
    let myArr = [];
    let newArr = [];
    myArr[0] = Number(arg[0]);
    let biggest = Number(arg[0]);
    let bigIndex = 0;
    for(let i = 0;i < arg.length;i++){
        myArr[i] = Number(arg[i]);
    }
    for(let i = 1;i < arg.length;i++){
        if(biggest > myArr[i]){

        }else{
            biggest = myArr[i];
            bigIndex = i;
        }
    }
    let j = 0;
    for(let i = bigIndex;i < myArr.length;i++){
        newArr[j] = myArr[i];
        j++;
    }
    for(let i = 0;i < newArr.length;i++){
        if(newArr[i] <= newArr[i+1]){
            newArr.splice(i,1);
        }
    }
    console.log(newArr.join(' '));
}