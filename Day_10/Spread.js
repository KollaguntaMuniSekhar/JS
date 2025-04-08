let src={
    age:12,
    wt:50,
    ht:180,
};
let desc ={...src};
// let desc=src; //it will not change like this.It will change on Both
//spread Operator
src.age=90;
console.log("src:",src);
console.log("desc:",desc);
