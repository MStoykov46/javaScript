//add or substitute if element value is even/odd
function addOrSub(arg){
    let sumArg = 0;
    let sumNewArr = 0;
    let newArr = [];
    for(let i = 0;i < arg.length;i++){
        newArr[i] = Number(arg[i]);
        sumArg += newArr[i];
        if(newArr[i] % 2 == 0){
            newArr[i] += i;
        }else{
            newArr[i] -= i;
        }
        sumNewArr += newArr[i];
    }
    console.log(`[ ${newArr.join(', ')} ]`);
    console.log(sumArg);
    console.log(sumNewArr);
}