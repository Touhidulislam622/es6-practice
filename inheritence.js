class Parent {
    constructor(){
        this.fatherName = "zack donald";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
        
    }
}
const baby = new Child("isha");
const baby2 = new Child("ramim");
console.log(baby);
console.log(baby2);
