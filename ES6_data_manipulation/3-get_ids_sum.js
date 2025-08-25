import getListStudents from "./0-get_list_students";

export default function getStudentIdsSum(getListStudents) {
    const initialValue = 0;
    return getListStudents.reduce((currentValue, student) => student["id"] + initialValue + currentValue);
}
