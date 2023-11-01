let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function findCommonCourses(courses1, courses2) {
    let commonCourses = [];
    for (let course of courses1) {
        if (courses2.includes(course)) {
            commonCourses.push(course);
        }
    }
    return commonCourses;
}

let commonCourses = findCommonCourses(student1Courses, student2Courses);

if (commonCourses.length > 0) {
    console.log("Los cursos comunes son:");
    console.log(commonCourses);
} else {
    console.log("No hay cursos comunes.");
}