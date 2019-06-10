import React from 'react';
import 'dotenv';
import Main from './main';

export default class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Main />
        )
    }
}