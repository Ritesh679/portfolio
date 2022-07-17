import React, { useContext } from 'react';
import {socialsData} from '../../data/socialsData'
import {headerData} from '../../data/headerData'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Landing.css'
import { ThemeContext } from '../../contexts/ThemeContext';

const Landing = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className='landing'>
            <div className='landing--container'>
                <div className='landing-container-left'  style={{backgroundColor:theme.primary}}>
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a href={socialsData.linkedIn} target='_blank' rel='noreferrer' >
                                <LinkedInIcon className='landing--social' aria-label='LinkedIn'/>
                            </a>    
                        ) }
                        {socialsData.github && (
                            <a href={socialsData.github} target='_blank' rel='noreferrer' >
                                <GitHubIcon className='landing--social' aria-label='LinkedIn'/>
                            </a>    
                        ) }
                    </div>
                </div>
                <img src={headerData.image} alt='' className='landing--img' style={{opacity:`$(drawerOpen?'0':'1')`}}/>
                <div className='landing-container-right' style={{backgroundColor:theme.secondary}}>
                    <div className='lcr--content' style={{color:theme.tertiary}}>
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.description}</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Landing;
