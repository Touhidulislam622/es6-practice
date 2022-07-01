class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "nk govt.clg"
        this.address = "raipur 2no blk"
        
    }
}
const student1 = new student(1, "jumur");
const student2 = new student(2, "pritti");
const student3 = new student(5, "rita");
console.log(student1, student2, student3);