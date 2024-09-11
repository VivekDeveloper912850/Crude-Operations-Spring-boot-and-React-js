import React, { Component } from 'react'
import { Link } from 'react-router-dom';


import axios from 'axios';

 class ListEmployee extends Component {

  constructor(props){
    super(props)
    this.state = {
      employees:[]
    
    };
    addEmployee() {
  
      this.props.history.push('/add-employee')
  
  }
}

  componentDidMount(){
    axios.get("http://localhost:4567/api/v1/employees").then(response => response.data).then((data) =>{
      this.setState({employees: data});
    });
  }
  
  editEmployee(id){
    this.props.history.push(`/update-employee/${id}`);
  }
 
  render() {
    return (
      <div>

      <h2 className='text-center'>Employees List</h2>
      <div>
      <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
      </div>
      <div className='row'>
      <table className='table table-striped table-bordered'>
      <thead>

        <tr>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Employee Email Id</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {
          this.state.employees.map(
            employee =>
            <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td>
              <button onClick={() => this.editEmployee(employee.id)} className='btn btn-info'>Update</button>
            </td>


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

export default ListEmployee

