import React, { Component } from 'react';
import './News.css';
import NewsItem from '../NewsItem/NewsItem';
import { connect } from 'react-redux';
import { addNews } from '../../api_request/api_request';

const mapStateToProps = (state) => {
    return {
        news: state.newArrayNews
    };
};

class News extends Component {

    state = {
        text: ''
    }

    changeInputNews = (e) => {
        e.preventDefault();
        this.setState(prevValue => ({
            [e.target.name]: e.target.value
        }), () => {
        })
    }

    clickBtnSearch = (e) => {
        e.preventDefault();
        const search = this.state.text;
        addNews(search);
    }

    render() {
        const news = this.props.news && this.props.news[0];
        return (
            <div className="news">
                <h1 className="news__title">Поиск новостей</h1>
                <form className="news__form" >
                    <input
                        className="news__form-input"
                        type="text"
                        id="text"
                        name="text"
                        placeholder="введите текс"
                        onChange={this.changeInputNews}
                    />
                    <button
                        onClick={this.clickBtnSearch}
                        className='news__container-button'>
                        Поиск
                    </button>
                    <div className="news__container-array">
                        {
                            news && news.map((item) => (
                                <div className='news__container-array-Item' key={item.id}>
                                    <NewsItem {...item} />
                                </div>
                            ))
                        }
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps)(News);