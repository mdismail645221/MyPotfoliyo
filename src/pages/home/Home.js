import React from 'react';
import Header from '../../components/Header/Header';
import About from '../About/About';
import AboutMe from '../AboutMe/AboutMe';
import ContactForm from '../ContactForm/ContactForm';
import MyProjects from '../MyProjects/MyProjects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <MyProjects></MyProjects>
            <AboutMe></AboutMe>
            <ContactForm/>
        </div>
    );
};

export default Home;