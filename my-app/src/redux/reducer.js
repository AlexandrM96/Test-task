const initialState = {
    admin: {
        login: 'Admin',
        password: '12345'
    },
    user: {
        login: '',
        password: ''
    },
    statusUser: false,
    arrayNews: []
}

function reducer(state = initialState, action) {

    switch (action.type) {
        case 'ADD_NEWS':
            const news = action.payload.data;
            const newArrayNews = [...state.arrayNews, news];
            return { ...state, newArrayNews }
        case 'ADD_STATUS_LOCAL':
            const status = action.payload.status;
                return { ...state, statusUser: status }
        case 'ADD_STATUS':
            const name = action.payload.userName;
            const password = action.payload.password;
            if ((name === state.admin.login) && (password === state.admin.password)) {
                localStorage.setItem('statusUser', true);
                return { ...state, statusUser: true }
            } else {
                alert('Имя пользователя или пароль введены не верно');
                return { ...state }
            }

        default:
            return state;
    }
}
export default reducer;