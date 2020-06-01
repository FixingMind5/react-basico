import React from 'react';
import { Link } from 'react-router-dom';

// images
import platziConfLogo from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'

// Styles
import './styles/Home.css'

const Home = () => (
    <div className="Home">
        <div className="info">
            <img className="info__logo" src={platziConfLogo} alt=""/>
            <h2 className="info__title">Print your badges</h2>
            <p className="info__description">the easiest way tomanage your conference</p>
            <Link className="btn btn-primary" to="/badges">Start Now</Link>
        </div>
        <img src={astronauts} alt="astronauts"/>
    </div>
)

export default Home;