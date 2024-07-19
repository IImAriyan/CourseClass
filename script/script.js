let pageOfCourse = 0;
//============== Course Class ==============================\\
class Course {
    id;
    title;
    date;
    time;
    students;
    constructor(id = 0,title = "",date = new Date(),time = new Date().getTime(),students) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.time = time;
        this.students = students;
    }
}
//============== Course Class ==============================\\

//============== Student Class ==============================\\
class Student {
    id;
    firstname;
    lastname;
    age;
    constructor(id = 0, firstname = "", lastname = "", age = 0){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}
//============== Student Class ==============================\\

function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

var Courses = []
var Stundets = []
function addingCourse() {
    const titleCourse = document.querySelector('#titleOfCourse').value;
    const dateCourse = document.querySelector('#dateOfCourse').value;
    const timeCourse = document.querySelector('#timeOfCourse').value;

    const  course = new Course();

    course.id = Courses.length;
    course.title = titleCourse;
    course.date = dateCourse;
    course.time = timeCourse;

    pageOfCourse = Courses.length
    //======= getting panel Course And Show And Set Data =============================================

    const coursePanel = document.querySelector('#coursePanel');
    coursePanel.style.display = 'flex';

    const titleLabel = document.querySelector('#titleLabel');
    const dateLabel = document.querySelector('#dateLabel');
    const timeLabel = document.querySelector('#timeLabel');

    titleLabel.textContent = course.title;
    timeLabel.textContent = course.time;
    dateLabel.textContent = course.date;

    //==================================================================================

    Courses.push(course)
};

//======= Adding Students =============================================

function addStudent(){
    const id = Stundets.length+1;

    const firstName = document.querySelector('#studentFirstName').value;
    const lastName = document.querySelector('#studentLastName').value;
    const age = document.querySelector('#studentAge').value;


    // ***************** Remove All Students **************************\\

    for (let i = 0; i < parseInt(Stundets.length); i++) {
        document.getElementById('student-'+Stundets[i].id).remove();
    }

    // ****************************************************************\\

    // ***************** Add Students In Students Array **************************\\

    Stundets.push(new Student(id,firstName,lastName,age));
    Courses[pageOfCourse].students = Stundets;

    // **************************************************************************\\

    // ***************** Add Student Element In HTML Document **************************\\
    Stundets.forEach(student => {

        const studentElement = document.createElement('div');
        studentElement.classList.add('student');
        studentElement.classList.add('flex');
        studentElement.classList.add('gap-4');
        studentElement.id = 'student-'+parseInt(student.id);
        content = `
        <div class="firstname" id="firstnameOfStudent">
            <h4>${student.firstname}</h4>
        </div>
        <div class="lastname" id="lastnameOfStudent">
             <h4>${student.lastname}</h4>
        </div>
        <div class="age" id="ageOfStudent">
        <h4>${student.age}</h4>
        </div>
        `
        studentElement.innerHTML = content;

        const students = document.querySelector('.students');

        students.appendChild(studentElement);
    })
    // *********************************************************************************\\
}

// ******************************** Close Course Panel Management *********************************************

function closeCoursePanel() {
    const coursePanel = document.querySelector('#coursePanel');
    coursePanel.style.display = 'none';
}

//*************************************************************************************************************