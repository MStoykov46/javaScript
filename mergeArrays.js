function mergeArr(arg,arg2){
    let thirdArr = [];
    for(let i = 0;i < arg.length;i++){
        if(i % 2 == 0){
            thirdArr[i] = Number(arg[i]) + Number(arg2[i]);
        }else {
            thirdArr[i] = arg[i] + '' + arg2[i];
        }
    }
    console.log(thirdArr.join('-'));
}