import React, { Component } from 'react'
import EmployeeService from '../../Services/EmployeeService'

class ListEployeeComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         employees:[]
      }
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
           this.setState({employees:res.data}); //stored employed data in employeed array
        })
    }
  render() {
    return (
      <div>
          <h2 className='text-center'>Employee List</h2>
          <div className='row'>
              <table className='table table-striped table-bordered'>
                  <thead>
                      <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                          <th>Action</th>
                      </tr>

                  </thead>
                  <tbody>
                      {
                          this.state.employees.map(
                              employee=>
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
    )
  }
}
export default ListEployeeComponents