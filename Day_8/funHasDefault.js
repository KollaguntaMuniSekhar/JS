function getAge(){
    return 100;
}
function utility(name,age=getAge()){
console.log(name," ",age);
}
utility("MUni")