import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees: []
        }
    }
    
    componentDidMount(){
       EmployeeService.getEmployees()
       .then(res=>res.json())
       .then(data=> this.setState({employees : data}));
    }
    
    render() {
        return (
            <div className='container-fluid'>
                <h2 className="heading text-center">Employees List</h2>
                <div className='row ms-2 me-2'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {  
                            this.state.employees.map(employee => 
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                </tr> 
                            )            
                            }          
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;