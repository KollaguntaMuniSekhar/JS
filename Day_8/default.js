//Allow to use functions with default values
function sayName(fName="Muni",lname=fName.toUpperCase()){//When We cannot pass any values than it will excute otherwise Not
    console.log("My name is",fName, " ",lname);
}
sayName("kkk");