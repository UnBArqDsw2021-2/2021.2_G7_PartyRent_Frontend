import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        return (
            <div className="navigation-bar">
                <div className="nav-items">
                    <Link to="/">Home</Link>
                    <Link to="/product">Explorar</Link>
                </div>
                <div className="nav-items">
                    <Link to="/cart">Carrinho</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        );
    }
}

export default NavigationBar;
