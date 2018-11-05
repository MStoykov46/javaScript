//print all the chars in the given range
function charInRange(a,b){
    let startCode , endCode;
    if(a.charCodeAt() < b.charCodeAt()){
        startCode = a.charCodeAt();
        endCode = b.charCodeAt();
    }else{
        startCode = b.charCodeAt();
        endCode = a.charCodeAt();
    }
    let charsInString = '';
    for(let i = startCode+1;i < endCode;i++){
        charsInString = charsInString + ' ' + String.fromCharCode(i);
    }
    
    console.log(charsInString);
}
