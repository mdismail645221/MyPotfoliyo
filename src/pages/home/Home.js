import React from 'react';
import Header from '../../components/Header/Header';
import About from '../About/About';
import MyProjects from '../MyProjects/MyProjects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;