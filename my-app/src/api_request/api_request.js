import store from "../redux/store";

export function addNews(value) {
    const url = 'https://content.guardianapis.com/search';
    const apiKey = '9725d0dd-e634-43c9-b9c0-d62480be2acb';
    const query = value;

    fetch(`${url}?q=${query}&api-key=${apiKey}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let news = data.response.results;
            store.dispatch({
                type: 'ADD_NEWS',
                payload: {
                    data: news,
                }
            })
        })
}