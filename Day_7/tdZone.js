//temporal Dead Zone
console.log(marks);//error
console.log("Temporal");
console.log("Dead");
console.log("Zone Here")
let marks=100;//upto Here it is TDZ i.e, 2 to 6 Because it cannot be accessable marks upto here
//BEST PRACTICE
//avoid to make Global variables for this const,let for good debugging
//Use always let,const NOt var for predictablity
console.log(marks);