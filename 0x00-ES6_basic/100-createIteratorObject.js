export default function createIteratorObject(report) {
  return (function* _() {
    for (const alldep of Object.values(report.allEmployees)) {
      for (const employee of alldep) {
        yield employee;
      }
    }
  }());
}
