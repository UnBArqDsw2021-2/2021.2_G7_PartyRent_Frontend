import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import './styles.css'

class NavigationBar extends React.Component {
    render() { 
        return (
            <div className="nav-bar">

                <Link to="/">
                    <img className = "nav-logo" src = { logo }/>
                </Link>

                <div className = "nav-btnbar">
                    <Link to="/">
                        <button className = "nav-btn">Home</button>
                    </Link>
                    <Link to="/products">
                        <button className = "nav-btn">Explorar</button>
                    </Link>
                    <Link to="/cart">
                        <button className = "nav-btn">Carrinho</button>
                    </Link>
                    <Link to="/login">
                        <button className = "nav-btn">Login</button>
                    </Link>
                </div>
            </div>
        );
    }
}
 
export default NavigationBar;
