export default function createReportObject(employeesList) {
  // get obj with all employee
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      // gets bo of key in obj
      return Object.keys(employeesList).length;
    },
  };
}
