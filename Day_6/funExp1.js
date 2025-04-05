// greet();  
//  {  //By using let it will show error By using greet also we get error on calling function();
//     console.log("Hello Dunia");
// }
greet1;   //But not on declaration I.e greet1; not shows error;
console.log(greet1); // here it shows undefined
var greet1 =function(){
    console.log("Hello Dunia1");
}
// console.log(typeof(var));
