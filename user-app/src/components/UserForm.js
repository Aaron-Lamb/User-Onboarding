import React, { useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import '../App.css'

const userSchema = yup.object().shape({
    name: yup.string().required("Please input your name"),
    email: yup.string().email("Please input a valid email address").required("Please input your email"),
    password: yup.string().required("Please enter your password"),
    terms: yup.boolean().oneOf([true], "Please read and accept the terms")
});

const UserForm = () => {

    const [userState, setUserState] = useState({
        name: '',
        email: '',
        password: '',
        terms: false
    })

    const [userError, setUserError] = useState({
        name: '',
        email: '',
        password: '',
        terms: ''
    })

    const validateUser = event => {
        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        yup.reach(userSchema, event.target.name)
        .validate(value)
        .then(valid => {
            setUserError({
                ...userError,
                [event.target.name]: ''
            });
        })
        .catch(error => {
            setUserError({
                ...userError,
                [event.target.name]: error.errors[0]
            });
        });
    }

    const userChange = (event) => {
        event.persist();
        validateUser(event);
        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setUserState({
            ...userState,
            [event.target.name]: value
        });
    }

    const userSubmit = (event) => {
        event.preventDefault();
        console.log(userState);
        setUserState({
            name: '',
            email: '',
            password: '',
            terms: false

        })
    }

    return(
        <form onSubmit={userSubmit}>
            <label>
                Name: 
                <input type='text' name='name' id='name' value={userState.name} onChange={userChange} />
                {userError.name.length > 0 ? (
                    <p className='error'>{userError.name}</p>
                ) : null
                }
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