const EMPLOYEE_API_BASE_URL = "http://localhost:8081/api/v1/employees"

class EmployeeService{
 getEmployees = async function () {
        return fetch(EMPLOYEE_API_BASE_URL)   
 }
}

export default new EmployeeService;         