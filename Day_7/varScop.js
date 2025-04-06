// function, global,block scopeings
//var  global  and function but  no block scope working
//let, const  block also work



//global scope same for all variables. And accesed anyWhere in the file

var age=15;
console.log(age);
{
console.log(age);
}
if(true){
    console.log(age);
}
for(let i=0; i<2; i++)
{
    console.log(age);
}
function sayHello(){
    console.log(age);

}
sayHello();
