import React from 'react';
 
const Username = (props) => {
    if(props.currentForm !== 2){
        return null
    }
    return (
        <div className="form-group">
            <input type="text" 
            placeholder="Enter Username" 
            className="form-control"
            id="username"
            name="username"
            value={props.username}
            onChange={props.handleChange} />
        </div>
    );
}
 
export default Username;