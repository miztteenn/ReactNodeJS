import React, { Component } from 'react'
import img from '../img/header.png';
import { NavLink } from 'react-router-dom'
import Header from '../Header/Header';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { sessionService, sessionReducer } from 'redux-react-session';
import thunkMiddleware from 'redux-thunk';

// Add the sessionReducer
const reducer = combineReducers({
    session: sessionReducer
});

const store = createStore(reducer, undefined, compose(applyMiddleware(thunkMiddleware)));

sessionService.initSessionService(store);

class Home extends Component {
    render() {
        return (
            <React.StrictMode>
                <Header />
                <header className="App-header" style={{ backgroundImage: 'url(' + img + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div>
                        <p style={{ fontSize: '50px' }}>WELCOME TO <b>IDIORR C'AFE</b></p>
                        <p style={{ fontSize: '15px' }}>- Eat Drink Visit -</p>
                        <br />
                        <button className="button is-warning" style={{ color: 'black' }}><NavLink to="/Contact" style={{ color: 'black' }}>ติดต่อ</NavLink></button>
                    </div>
                </header>
            </React.StrictMode>)
    }
}

export default Home