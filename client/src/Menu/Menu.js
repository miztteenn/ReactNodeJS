import React, { Component} from 'react'
import img from '../img/menuheader.png';
import header from '../img/header.png';
import Header from '../Header/Header';

class Menu extends Component {
    render() {
        return (
            <React.StrictMode>
                <Header/>
                <div style={{backgroundColor:'black'}}>
                <img src={img} alt="IDIORR LOGO" width="40%" height="1.75rem" />
                </div>
                <header className="App-header" style={{backgroundImage:'url('+header+')',backgroundRepeat: 'no-repeat',backgroundSize:'cover'}}>
                </header>
            </React.StrictMode>)
    }
}

export default Menu