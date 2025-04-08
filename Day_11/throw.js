//by using this we can throw error . We can create Custom error
try{
    console.log(x);//it is a Refeence error
}
catch(er){
    throw new Error("Do Declaration First");
}