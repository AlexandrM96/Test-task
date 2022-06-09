import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNews } from '../../api_request/api_request';
import store from '../../redux/store';

const mapStateToProps = (state) => {
    return {
        status: state.statusUser
    };
};

class Header extends Component {

    componentDidMount = () => {
        let statusUser = localStorage.getItem('statusUser');
        statusUser === 'true' ?
            statusUser = true
            :
            statusUser = false
        store.dispatch({
            type: 'ADD_STATUS_LOCAL',
            payload: {
                status: statusUser
            }
        })
        addNews('');
    }

    render() {
        const status = this.props.status;
        return (
            <header className="header">
                <h1 className="header__title">
                    News
                </h1>
                <ul className="header__list">
                    <li className="header__list-item">
                        <Link className="header__list-link" to="/">
                            На главную
                        </Link>
                    </li>
                    <li className="header__list-item">
                        <Link className="header__list-link" to="/news">
                            Новости
                        </Link>
                    </li>
                    <li className="header__list-item">
                        <Link className="header__list-link" to={
                            status === false ?
                                '/login'
                                :
                                '/profile'
                        }>
                            Профиль
                        </Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default connect(mapStateToProps)(Header);