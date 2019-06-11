import React from 'react';
import 'dotenv';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './index.css';
import logoWit from './images/wit.png';

export default class Main extends React.Component {

    render() {
        return (
            <div id="body">
                <Router>
                    <header>
                        <img className="wit-picture"
                             alt="Logo Wit"
                             src={logoWit}/>
                    </header>
                    <main>
                        Hello
                    </main>
                    <footer>

                    </footer>
                </Router>
            </div>
        )
    }
}