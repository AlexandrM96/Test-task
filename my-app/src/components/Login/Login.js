import React, { useState } from 'react'
import './Login.css';
import store from '../../redux/store';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Login() {

    const status = useSelector(state => state.admin);
    const navigate = useNavigate();

    const [Login, setLogin] = useState(() => {
        return {
            email: "",
            password: ""
        }
    })

    const changeInputLogin = event => {
        event.persist()
        setLogin(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const submitChackin = (e) => {
        e.preventDefault();
        const adminLogin = status.login;
        const adminPassword = status.password;
        store.dispatch({
            type: 'ADD_STATUS',
            payload: {
                userName: Login.email,
                password: Login.password
            }
        })
        if (adminLogin === Login.email && adminPassword === Login.password) return navigate("/profile")
    }

    return (
        <div className="login">
            <h2 className="login__title">Login:</h2>
            <form className="login__form" onSubmit={submitChackin}>
                <p className="login__form-paragraph">
                    Name:
                    <input
                        className="login__form-input"
                        type="text"
                        id="email"
                        name="email"
                        value={Login.email}
                        onChange={changeInputLogin}
                    />
                </p>
                <p className="login__form-paragraph">
                    Password:
                    <input
                        className="login__form-input"
                        type="password"
                        id="password"
                        name="password"
                        value={Login.password}
                        onChange={changeInputLogin}
                    />
                </p>
                <button className="login__form-button">Login</button>
            </form>
        </div>
    )
}

export default Login;