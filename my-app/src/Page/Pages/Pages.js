import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../../components/Login/Login';
import Profile from '../../components/Profile/Profile';
import News from '../../components/News/News';
import Home from '../../components/Home/Home';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        status: state.statusUser
    };
};

class Pages extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </>
        )
    }
}

export default connect(mapStateToProps)(Pages);