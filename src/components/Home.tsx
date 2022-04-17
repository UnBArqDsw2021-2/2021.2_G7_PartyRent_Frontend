import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    render() { 
        return (
            <div className="App">
              <header>
                <h1>PartyRent</h1>
              </header>
              <Link to="/product">
                <Button
                title='Descubra os nossos produtos'
                color='#5b3ea1'
                />
              </Link>
            </div>
        )
    }
}
 
export default Home;