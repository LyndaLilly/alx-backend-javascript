/**
 * this is a list of student IDs from a list of students.
 * @param {Array} students - The list of students
 * @return {Array} A list of student IDs
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    // this maps the students to their IDs and return the result
    return students.map((student) => student.id);
  }
  // when students is not an array, it return an empty array
  return [];
}
