/*
Peter is starting his own course, a Baking Masterclass. So, he asked you to buy the needed items. The number of items depends on how many students will sign up for the course. The educational set for one student consists of 1 package of flour, 10 eggs and an apron. 
You will be given Peter`s budget, the number of students signed and the prices of each item. You have to help Peter calculate if the budget is enough to buy all of the items, or how much more money he needs. 
Because the aprons get dirty often, Peter should buy 20% more, rounded up to the next integer. Also, every fifth package of flour is free. 
Input / Constraints
The input data will consist of exactly 5 lines:
•	budget – floating-point number in range [0.00…1,000.00]
•	students – integer in range [0…100]
•	price of flour for a package – floating-point number in range [0.00…100.00]
•	price of egg for a single egg – floating-point number in range [0.00…100.00]
•	price of apron for a single apron – floating-point number in range [0.00…100.00]
The input data will always be valid. There is no need to check it explicitly. 
* If you are using JavaScript, you receive the input as an array with 5 elements: [budget, students, flour, egg, apron]

*/ 
function bakingMasterClass(arguments){
    let budget = Number(arguments[0]);
    let students = Number(arguments[1]);
    let priceOfFlour = Number(arguments[2]);
    let priceOfEggs = Number(arguments[3]);
    let priceOfAprons = Number(arguments[4]);
    let freeFlourCount = Math.floor(students / 5);
    let moneyNeededForFlour = (students-freeFlourCount)*priceOfFlour;
    let moneyNeededForEggs = students*priceOfEggs*10;
    let moneyNeededForAprons = (Math.ceil(students/5) + students) * priceOfAprons;
    let total = (moneyNeededForAprons + moneyNeededForEggs + moneyNeededForFlour).toFixed(2);
    if(budget >= total){
        console.log(`Items purchased for ${total}$.`);
    }else{
        let neededMore = (total-budget).toFixed(2);
        console.log(`${neededMore}$ more needed.`);
    }
}