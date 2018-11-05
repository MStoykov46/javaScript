//compare and print all elements with matching values
function compareArr(arg,arg2){
    let matches = [];
    let matchesCount = 0;
    for(let i = 0;i < arg.length;i++){
        for(let j = 0;j < arg2.length;j++){
            if(arg[i] === arg2[j]){
                matches[matchesCount] = arg[i];
                matchesCount++;
                break;
            }
        }
    }
    console.log(matches.join('\n'));
}