function solve(number){
    return function(number){
        return number*number;
    }
}
let ans=solve(5);
let finAns =ans(10);
console.log(finAns);