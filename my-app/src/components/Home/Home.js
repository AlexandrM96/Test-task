import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className='home'>
                <h1>Тестовое задание</h1>
                <p>Логин:Admin</p>
                <p>Пароль:12345</p>
            </div>
        )
    }
}

export default Home;