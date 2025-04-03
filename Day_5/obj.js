let obj={
    name1:"Sasi",
    " full name":"muni sekhar",
    age:19,
    weight:48,
    greet: function(){
        console.log("Hello World");

    }
    
}
console.log(obj);
obj.greet;
console.log(typeof(obj));//enumberable properties of object
for(let key in obj){
    console.log(key,obj[key]);
}
