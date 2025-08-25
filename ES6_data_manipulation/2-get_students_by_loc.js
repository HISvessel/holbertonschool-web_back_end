import getListStudents from "./0-get_list_students.js"

export default function getStudentByLocation(getListStudents, city) {
  return getListStudents.filter((student) => student["location"] === city);
}
