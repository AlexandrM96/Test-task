import React, { Component } from 'react';
import './Profile.css';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../../redux/store';

const mapStateToProps = (state) => {
    return {
        status: state.statusUser
    };
}

class Profile extends Component {

    exitClick = (e) => {
        e.preventDefault();
        localStorage.clear();
        store.dispatch({
            type: 'ADD_STATUS_LOCAL',
            payload: {
                status: false
            }
        })
    }

    render() {
        const status = this.props.status;
        if (!status) return <Navigate to="/login" />
        return (
            <div className="profile">
                <h2 className="profile__title">Автор тестового задания</h2>
                <div className="profile__container">
                    <p className="profile__container-paragraph">
                        Имя:  Александр
                    </p>
                    <p className="profile__container-paragraph">
                        Фамилия: Мищенинцев
                    </p>
                </div>
                <button onClick={this.exitClick} className="profile__form-button">Выход</button>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Profile);