import React from 'react';
import * as yup from 'yup';
import axios from 'axios';

const UserForm = () => {
    return(
        <form>
            <label>
                Name: 
                <input type='text' name='name' id='name' />
            </label>
            <label>
                Email: 
                <input type='email' name='email' id='email' />
            </label>
            <label>
                Password: 
                <input type='password' name='password' id='password' />
            </label>
            <label>
                Do you agree to the terms of service?
                <input type='checkbox' name='terms' id='terms' checked/>
            </label>
        </form>
    )
}

export default UserForm;