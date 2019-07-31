import React from 'react';
import 'dotenv';
import Main from './main';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import {applyMiddleware, createStore, combineReducers} from 'redux';
import formationsReducer from "./redux/formations/reducers";
import filtersReducer from './redux/filters/reducers';
import '@fortawesome/fontawesome-free/css/all.min.css';

const reducer = combineReducers({
    formationsReducer,
    filtersReducer
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Provider store={store} >
                <Main />
            </Provider>
        )
    }
}

export default App;