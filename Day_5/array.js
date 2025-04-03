let arr=[1,2,3,4,5];
console.log(arr);
//by using array constructor
let arr1=new Array('sasi',1,1.5,true);
// console.log(arr1);
// console.log(typeof(arr1));//object 
//bulit in functions
arr1.push('Muni');//inserting element at the end of the array
arr1.pop(1);//remove on last
arr1.shift();// remove on the first
arr1.unshift(88);// adding on the first of array
arr1.push(11);
arr1.push(10);
arr1.push(9);
console.log(arr1.slice(2,4));// from two it takes that means 2,3. 4 is exccluded.(new part)
console.log(arr1);

