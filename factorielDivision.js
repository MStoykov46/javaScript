function factorielDivision(x,y){
    let numA = Number(x);
    let numB = Number(y);
    function findFactoriel(num){
        let factoriel = 1;
        for(let i = num;i > 0;i--){
            factoriel *= i;
        }
        return factoriel;
    }
    x = findFactoriel(numA);
    y = findFactoriel(numB);
    let result = (x / y).toFixed(2);
    console.log(result);
}