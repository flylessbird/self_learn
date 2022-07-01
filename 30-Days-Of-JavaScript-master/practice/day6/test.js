var grades = [73, 67, 38, 33]
function gradingStudents(grades) {
    // Write your code here
    var grade1 = 0, grade2 = 0
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            grade1 = grades[i] + 1
            grade2 = grades[i] + 2
            if (grade1 % 5 == 0) {
                grades[i] = grade1
            }
            else if (grade2 % 5 == 0){
                grades[i] = grade2
            }
        }
    }
    return grades
}
console.log(gradingStudents(grades));
