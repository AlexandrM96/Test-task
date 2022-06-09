import React, { Component } from 'react';
import './NewsItem.css';

class NewsItem extends Component {

    render() {
        const { webTitle, webUrl } = this.props;
        return (
            <>
                <a href={webUrl}
                    target='_blank'
                    className='news-item__name'>
                    {webTitle}
                </a>
            </>
        )
    }
}

export default NewsItem;