
var student = require("./Student.js")
var input = require("readline-sync")
var ajoc = null;

//the program runs until "YES" is inputed!
do {
ajoc = new student();
    console.log("Add Student : ")
    ajoc.setName(input.question("\tName : "))
    console.log("Add Course : ")
    ajoc.addCourse(input.question("\tCourse : "),input.question("\tYear : "))
    console.log("Add Schedule :")
    ajoc.addSchedule(input.question("\tDay : "),input.question("\tTime : "))
    ajoc.addStudent(ajoc)
    console.log("Successfully Added!");
} while
(input.question("exit? : ")!= "yes");
ajoc.display();
if(input.question ("Do you want to remove a student?:") == "yes"){
ajoc.removeStudent(input.question("Index you want to remove: ") ,input.question("Number os student to remove: "));
};
ajoc.display();