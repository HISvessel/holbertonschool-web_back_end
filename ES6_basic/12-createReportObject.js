export default function createReportObject(employeesList) {
  const reportObj = {
    allEmployees: employeesList,
    getNumberOfDepartments: (employeesList) => employeesList.length,
  };
  return reportObj;
}
