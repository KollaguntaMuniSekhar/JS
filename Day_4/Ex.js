function myName(surname,firstname,lastname){
    let my=surname+" "+firstname+" "+lastname;
    return my;
    //unreachable statements
    let a=10;
    console.log(a);
}
let Name=myName("Kollagunata","Muni","Sekhar");
console.log("My full Name is :",Name)