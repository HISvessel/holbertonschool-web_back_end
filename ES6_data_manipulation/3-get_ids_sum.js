import getListStudents from "./0-get_list_students";

export default function getStudentIdsSum(getListStudents) {
    return getListStudents.reduce((currentValue, student) => student["id"] + currentValue, 0);
}
