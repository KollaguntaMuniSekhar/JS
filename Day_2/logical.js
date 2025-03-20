//And, or ,not
let ans=(true && true &&true);
console.log(ans);
let les=(false || true || false);
console.log(les);
let mes=!(false);
console.log(mes);
//falsy  undefined
//null 0 false,NaN,String
//true anything Which is not falsy
//short circuting  example false|| true ||false ||true --> after first true it will not check is known as shortcircuting
console.log(false || '7' || 5);

