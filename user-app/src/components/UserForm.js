import React, { useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';

const UserForm = () => {

    const [userState, setUserState] = useState({
        name: '',
        email: '',
        password: '',
        terms: false
    })

    const userChange = (event) => {
        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setUserState({
            ...userState,
            [event.target.name]: value
        });
    }

    return(
        <form>
            <label>
                Name: 
                <input type='text' name='name' id='name' value={userState.name} onChange={userChange} />
            </label>
            <label>
                Email: 
                <input type='email' name='email' id='email' value={userState.email} onChange={userChange} />
            </label>
            <label>
                Password: 
                <input type='password' name='password' id='password' value={userState.password} onChange={userChange} />
            </label>
            <label>
                Do you agree to the terms of service?
                <input type='checkbox' name='terms' id='terms' checked={userState.terms} onChange={userChange} />
            </label>
            <button type='submit'>Submit User</button>
        </form>
    )
}

export default UserForm;