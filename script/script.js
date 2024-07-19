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


//============== Other Functions ===============================\\
function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

function errorMessage(message){

    //============== Show ErrorMessage Element ===============================\\

    const errorMessageElement = document.querySelector('#error-message');
    errorMessageElement.style.display = 'inherit';

    //=========================================================================\\

    //============== Set Text Error ===============================\\

    const errorMessageText = document.querySelector('#errorMessageText');
    errorMessageText.textContent = message;
    navigator.vibrate(2000); // Mobile Vibrate

    //==============================================================\\
}

function removeErrorMessage() {

    //============== Hide ErrorMessage Element ===============================\\

    const errorMessageElement = document.querySelector('#error-message');
    errorMessageElement.style.display = 'none';

    //=========================================================================\\
}

//============== End Of Other Functions ===============================\\

// Arrays
var Courses = []
var Stundets = []

function addingCourse() {
    const titleCourse = document.querySelector('#titleOfCourse').value;
    const dateCourse = document.querySelector('#dateOfCourse').value;
    const timeCourse = document.querySelector('#timeOfCourse').value;


    // =============== Error Messages ==================\\
    if (titleCourse !== '') {
        if (dateCourse !== '') {
            if (timeCourse !== '') {

                removeErrorMessage() // Hide Error Message

                const  course = new Course();

                course.id = Courses.length;
                course.title = titleCourse;
                course.date = dateCourse;
                course.time = timeCourse;


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
                pageOfCourse = Courses.length
            }else {
                errorMessage('Please Enter Time');
            }
        }else {
            errorMessage('Please Enter Date');
        }
    }else {
        errorMessage('Please Enter Title');
    }
    // =============== Error Messages ==================\\

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

        const studentElement = document.createElement('tbody');
        studentElement.classList.add('student');
        studentElement.id = 'student-'+parseInt(student.id);
        content = `
             <td>${student.firstname}</td>
             <td>${student.lastname}</td>
             <td>${student.age}</td>
        `
        studentElement.innerHTML = content;

        const students = document.querySelector('#students-table');

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