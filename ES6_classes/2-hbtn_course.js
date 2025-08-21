export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== "string") {
      throw new Error ("Name must be a string")
    }
    if (typeof length !== "number") {
      throw new Error("Length must be a number")
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }
  set name(input) {
    this._name = input;
  }

  get length() {
    return this._length;
  }
  set length(input) {
    if (typeof input !== "number") {
        console.error("TypeError: Length must be a number")
    }
    this._length = input;
  }

  get students() {
    return this._students
  }
  set students(input) {
    this._students = input;
  }
}
