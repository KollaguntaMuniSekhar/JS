//if-else 
let age=53;
if(age>=18)
{
    console.log(" We can Vote");
}
// else{
//     console.log("We cannot vote");
// }
//if else if else
let number=5;
if(number ==1){
    console.log('A');
}
else if(number == 2){
    console.log('B');
}
else if(number == 3){
    console.log('C');
}
else if(number== 4){
    console.log('D');

}
else if(number ==5){
    if(age>18){//nested if
        console.log('Eligible for  Vote');
    }
    console.log('E');
}
else{
    console.log("Out Of range");
}
//switch case
let Marks=75;
switch(Marks){
    case 100:console.log('First ');
    break;
    case 75:console.log('second');
    break;
    case 76:console.log('second');
    break;
    case 77:console.log('second');
    break;
    case 78:console.log('second');
    break;
    default: console.log('F');
    


}


