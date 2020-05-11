import React, { Component } from 'react';
import Email from './Email';
import Username from './Username';
import Password from './Password';
 
class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            username: '',
            password: '',
            currentForm: 1,
        }
    }
    // handleChange function
    handleChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            [name]: value,
        });
    }
    // submit function
    handleSubmit = (e) =>{
        // prevent default form behaviour
        e.preventDefault();
        // destructure the state properties
        const {email, username, password } = this.state
        alert(`Your registration detail: \n 
           Email: ${email} \n 
           Username: ${username} \n
           Password: ${password}`)
    }
    _next = () =>{
        let currentForm = this.state.currentForm;
        currentForm = currentForm >= 2 ? 3 : currentForm + 1;
        this.setState({
            currentForm: currentForm,
        });
    }
    // previous btn
    _prev = () =>{
        let currentForm = this.state.currentForm;
        currentForm = currentForm <= 1?1 : currentForm - 1;
        this.setState({
            currentForm: currentForm,
        });
    }

    previousButton = () =>{
        let currentForm = this.state.currentForm;
        if(currentForm !== 1){
            return(
                <button 
                className="btn btn-secondary"
                onClick={this._prev}
                type="button"
                >Previous
                </button>
            )
        }
        return null
    }
    nextButton = () =>{
        let currentForm = this.state.currentForm;
        if(currentForm < 3){
            return(
                <button 
                className="btn btn-primary float-right"
                onClick={this._next}
                type="button"
                >Next
                </button>
            )
        }
        return null
    }
    render() { 
        return (
            <>
            <h5>Wizard Form</h5>
            <p>Step{this.state.currentForm}</p>
                <form onSubmit={this.handleSubmit}>
                 <Email 
                     currentForm={this.state.currentForm}
                     handleChange={this.handleChange}
                     email={this.state.email}
                 />
                 <Username 
                     currentForm={this.state.currentForm}
                     handleChange={this.handleChange}
                     email={this.state.username}
                 />
                 <Password 
                     currentForm={this.state.currentForm}
                     handleChange={this.handleChange}
                     email={this.state.password}
                 />
                 {this.previousButton()}
                 {this.nextButton()}
               </form>
            </>
        );
    }
}
 
export default Form;