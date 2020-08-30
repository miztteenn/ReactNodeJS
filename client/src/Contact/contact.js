import React, { Component} from 'react'
import img from '../img/contactheader.png';
import header from '../img/header.png';
import { FaMapMarkerAlt } from 'react-icons/fa'
import Header from '../Header/Header';


class Contact extends Component {
    render() {
        return (
            <React.StrictMode>
                <Header/>
                <div style={{backgroundColor:'black'}}>
                <img src={img} alt="IDIORR LOGO" width="40%" height="1.75rem" />
                </div>
                <header className="App-header" style={{backgroundImage:'url('+header+')',backgroundRepeat: 'no-repeat',backgroundSize:'cover'}}>
                <div>
                    <form method="POST" action="/Contact/Submit">
                    <FaMapMarkerAlt/>    
                        <label>First name : </label>
                        <input type="text" name="fname" id="fname"/>
                        <input type="submit"/>
                    </form>
                </div>
                </header>
            </React.StrictMode>)
    }
}

export default Contact