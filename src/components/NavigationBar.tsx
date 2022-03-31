import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    render() { 
        return (
            <div className="navigation-bar">
                <Link to="/" >
                    <button>Home</button>
                </Link>
                <Link to="/products">
                    <button>Explorar</button>
                </Link>
                <Link to="/cart">
                    <button>Carrinho</button>
                </Link>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        );
    }
}
 
export default NavigationBar;