//condensing an array
   function recurse(arg){
    let condensed = [];
       for(let y = 0;y < arg.length;y++){
           if(arg[y+1] == null){
               if(arg.length == 1){
                   console.log(arg[0]);
                   return;
               }
               arg = [];
               for(let j = 0;j < condensed.length;j++){
                  arg[j] = Number(condensed[j]);
               }
               condensed = [];
               return recurse(arg);
           }
        condensed[y] = arg[y] + arg[y+1];
       }
    return recurse(arg);
   }
   recurse(nums);
}