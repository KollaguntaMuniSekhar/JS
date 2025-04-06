// var can be accessed out side of block
console.log(age);// it will show undefined because of putted before the declaration
{
    var age=100;
    console.log(age);

}
console.log(age);
{
    console.log(age);

}
// {
//     let age=100;

// }
// console.log(age);//it will raise error Only block Accessible.Same for let,const 

