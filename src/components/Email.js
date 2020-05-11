import React from 'react';
 
const Email = (props) => {
    return (
        <div className="form-group">
        <h5>Step1</h5>
            <input type="text" 
            placeholder="Email Address" 
            className="form-control"
            id="email"
            name="email"
            value={props.email}
            onChange={props.handleChange} />
        </div>
    );
}
 
export default Email;