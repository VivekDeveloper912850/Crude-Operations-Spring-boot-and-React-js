import React, { Component } from 'react'
import axios from 'axios';

export default class UpdateEmployee extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          name: '',
          lastName: '',
          email: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changelastNameHandler = this.changelastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
      }
      changeFirstNameHandler=(event) => {
         this.setState({name: event.target.value});
      }
      changelastNameHandler=(event) =>{
        this.setState({lastName: event.target.value});
      }
    
      changeEmailIdHandler = (event) => {
        this.setState({email: event.target.value});
      }
      saveEmployee = (e) => {
        e.preventDefault();
        let employee = {name:this.state.name,lastName:this.state.lastName,email:this.state.email};
        console.log('employee =>' +JSON.stringify(employee));
        axios.post("http://localhost:4567/api/v1/employees",employee).then(res => {
    
        });
      }
      cancel(){
        this.props.history.push('/employee');
      }
    
      render() {
        return (
          <div>
             <div className='container'>
              <div className='row'>
              <div className='card col-md-6 offset-md-3 offset-md-3'>
               <h3 className='text-center'>Add Employee</h3>
               <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label> First Name: </label>
                    <input placeholder='First Name' name='name' className='form-control'
                     value={this.state.name} onChange={this.changeFirstNameHandler}/>
                  </div>
    
                  <div className='form-group'>
                    <label> Last Name: </label>
                    <input placeholder='Last Name' name='lastName' className='form-control'
                     value={this.state.lastName} onChange={this.changelastNameHandler}/>
                  </div>
    
                  <div className='form-group'>
                    <label> Email Id: </label>
                    <input placeholder='Email Address' name='email' className='form-control'
                     value={this.state.email} onChange={this.changeEmailIdHandler}/>
                  </div>
    
                  <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                  <button className='btn btn-success' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                </form>
               </div>
    
              </div>
    
              </div>
             </div>
          </div>
        )
      }
}
