let src={
    age:10,
    wt:30,
    height:100,
};
let  dest= Object.assign({}, src);
src.age=20;//it will change on source only for normal One it changes on BOth
console.log("Source:",src);
console.log("destination",dest);