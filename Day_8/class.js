//class Example class is a BluePrint of House
//Complination of house That is Object. By Following of Blue Print it is Build
//actual Thing  i.e. Home is a Object
//bluePrint is class
//class is a box which contains two majority Things Eg:Human
//one is class state/properies   Eg:age,weight,height
//another one is Behaviour/functionality Eg:walking,running;
//variableDeclaration  a =new Human();
class Human{
    //properties
    age;//public //Inserting value By Using Constructor
    #weight =45;//private
    height =150;
    constructor(newAge,newHeight,newWeight){
        this.age=newAge;
        this.height=newHeight;
        this.#weight=newWeight;
    }
    //behaviour
    #walking(){
        console.log("I am Walking",this.#weight);//current Variable accesing is done by this keyword
        
    }
    running(){
        console.log("I am Running")
    }
    get fetchWeight(){//for Encapsulation,semantic,dataProtection
        return this.#weight;
    }
    set modifyWeight(val){
        this.#weight =val;
    }

}
let obj =new Human(100,160,1000);
// console.log(obj.age);
// console.log(obj.#weight);
console.log(obj.fetchWeight);
obj.walking();