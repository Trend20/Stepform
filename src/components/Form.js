import React, { Component } from 'react';
import Email from './Email';
import Username from './Username';
import Password from './Password';
 
class Form extends Component {
    render() { 
        return (
            <form>
                <Email />
                <Username />
                <Password />
            </form>
        );
    }
}
 
export default Form;