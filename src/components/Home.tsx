import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import logos from "./images/logos.png"

class Home extends React.Component {

    render() { 
        return (
            <div className="App">
              <header>
              <img src={logos}/>
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