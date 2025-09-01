import getListStudents from "./0-get_list_students";

export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const filteredStudents = getListStudents.filter((student) => student["location"] === city)
  .map(student => {
    const gradeObj = newGrades.find(grade => grade.studentId === student.id);
    return {
      ...student, 
      grade: gradeObj ? gradeObj.grade : "N/A",
      };
    });

    return filteredStudents;
}
