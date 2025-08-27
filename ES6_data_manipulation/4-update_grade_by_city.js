import getListStudents from "./0-get_list_students";

export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
    if (newGrades === undefined) {
        return `N/A`;
    }
    const filteredStudents = getListStudents.filter((student) => student["location"] === city)
    const grade = newGrades.map((g) => g["grade"]);
    return filteredStudents.map((student) => student["grade"] = grade);
}
