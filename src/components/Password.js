import React from 'react';
 
const Password = (props) => {
    if(props.currentForm !== 3){
        return null
    }
    return (
        <div className="form-group">
            <h5>Step3</h5>
            <input type="password" 
            placeholder="Password" 
            className="form-control"
            name="password"
            id="password"
            value={props.password}
            onChange={props.handleChange} />
        </div>
    );
}
 
export default Password;