import React from 'react';
import 'dotenv';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from './pages/home/home';
import Formations from './components/formations/formations';
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

                        <nav className="app-navbar">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link">
                                        Accueil
                                    </Link>
                                </li>

                                <li className="nav-item active">
                                    <Link to={"/formations"}>
                                        Formations
                                    </Link>

                                </li>

                            </ul>
                        </nav>
                    </header>

                    <main>
                        <Route>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/formations" component={Formations}/>
                            {/*<Route exact path="/formation/:id" component={Formation}/>*/}

                        </Route>
                    </main>
                    <footer>

                    </footer>
                </Router>
            </div>
        )
    }
}