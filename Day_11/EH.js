//We Use try catch block for error Handling
try{
    console.log("Starts Here")
    console.log(x);
    console.log("After error this line won't excute >>..<<")
    //a


    //b//if  it got error it will not go further


    //c
}
catch(e){
    // defines What do u want with error
    //retry logic,fallback mechanism,logging,custom error
    console.log("Inside catch block")
    console.log("Your Error is Here",e)

}
//Finally Block i will  run everytime
finally{
    console.log("I will Excute Everytime")
}
