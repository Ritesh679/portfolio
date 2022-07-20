import React, { useContext } from 'react';
import { NavHashLink} from 'react-router-hash-link';
import {socialsData} from '../../data/socialsData'
import {headerData} from '../../data/headerData'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Landing.css'
import {ThemeContext} from '../../contexts/ThemeContext';
import {makeStyles} from '@mui/styles'
import { Button } from '@mui/material';

const Landing = () => {
    const {theme} = useContext(ThemeContext);
    const useStyles = makeStyles((t)=>({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
            // [t.breakpoints.down('sm')]: {
            //     width: '180px',
            // },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            // [t.breakpoints.down('sm')]: {
            //     display: 'none',
            // },
        },
    }));
    const classes = useStyles();
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

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a href={headerData.resumePdf} download = 'resume' target='_blank' rel='noreferrer'>
                                    <Button className={classes.resumeBtn}>Resume</Button>
                                </a>
                            )}
                            <NavHashLink
                                to='/#contact'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.contactBtn}>
                                    Contact
                                </Button>
                            </NavHashLink>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Landing;
