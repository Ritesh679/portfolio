import React from 'react';
import {Helmet} from 'react-helmet'
import About from '../../Components/About/About';
import Landing from '../../Components/Landing/Landing';
import Navbar from '../../Components/Navbar/Navbar';
import Education from '../../Components/Education/Education';
import Footer from '../../Components/Footer/Footer';
import Skills from '../../Components/Skills/Skills';
import Contact from '../../Components/Contacts/Contact';
import Achievements from '../../Components/Achievements/Achievements';
import Projects from '../../Components/Projects/Projects';
import MyTeams from '../../Components/MyTeams/MyTeams';
const Main = () => {
    return (
        <div>
            <Helmet>
                <title>Ritesh</title>
            </Helmet>
            <Navbar/>
            <Landing/>
            <About/>
            <Education/>
            <Skills/>
            <Projects/>
            <Achievements/>
            <MyTeams/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Main;
