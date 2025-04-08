//use spread,assign
let src={
    age:10,
    wt:10,
    ht:10,
};
let dest ={};
//cloning using iteration
for(let key in src){
    //console.log(key);
    let newKey =key;
    let newValue =src[key];
    dest[newKey] =newValue;
}
src.age=90;
console.log("src:",src);
console.log("Dest",dest);