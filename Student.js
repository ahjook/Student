var list =[];
class Student {
    constructor(name) {
        this.name = name;
        this.schedule = {};
        this.course = {};
    }
setName(name) {
        this.name =name;
    }
    addSchedule(day, time) {
        this.schedule[day] = time;
    }
addCourse(course,year){
        this.course[course] = year;
}
addStudent(student){
list.push(student)
}
    display(){
        console.log(list)
    }
    removeStudent (index ,noOfStudent){
        list.splice(index ,noOfStudent)
    }
   


}
   

module.exports = Student;