function solve(value={age:15,wt:60,ht:80}){//possible to insert array and obj like premitive
    console.log('Hello',value)
}
solve();
function solve1(value='Tom'){
    console.log('Hello',value)//o/P:null
}
solve1(null);
function solve2(value='Tom'){
    console.log('Hello',value)//o/P:Tom
}
solve2(undefined);

