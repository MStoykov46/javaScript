function condenseArr(arr){
    let nums = [];
    for(let i = 0;i < arr.length;i++){
        nums[i] = Number(arr[i]);
    }
    let i = 0;
    let condense = [];
    if(nums.length == 1){
        console.log(nums[0]);
        return;
    }else{
    while(nums.length != 0){
        if(nums[i+1] == null){
            nums = [];
            for(let j = 0;j < condense.length;j++){
                nums[j] = condense[j];
            }
            if(nums.length == 1){
                console.log(condense[0]);
                return;
            }
            condense = [];
            i = 0;
        }
        condense[i] = nums[i] + nums[i+1];
        i++;
    }
    }
}