let src={
    age:10,
    wt:40,
    ht:100,
};
let src2={
    value:501,
    name:"Tom HilFigher",
};
let dest =Object.assign({},src,src2);
src.age=30;
console.log("Src",src);
console.log("Det",dest);