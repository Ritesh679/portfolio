import React, { useContext, useState } from 'react';
import {NavHashLink} from 'react-router-hash-link'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person'; 
import SchoolIcon from '@mui/icons-material/School';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupsIcon from '@mui/icons-material/Groups';
import CallIcon from '@mui/icons-material/Call';
import { Drawer} from '@mui/material';
import Fade from 'react-reveal/Fade'
import {ThemeContext} from '../../contexts/ThemeContext'
import {makeStyles} from '@mui/styles'
import './Navbar.css'

const Navbar = () => {
    const [open,setOpen] = useState(false)
    const {theme} = useContext(ThemeContext);
    const useStyles = makeStyles((t)=>({
        navMenu:{
            fontSize: '2.5rem',
            color: theme.tertiary,
            cursor: 'pointer',
            transform: 'translateY(-10px)',
            transition: 'color 0.3s',
            '&:hover': {
                color: theme.primary,
            },
            // [t.breakpoints.down('sm')]: {
            //     fontSize: '2.5rem',
            // },
            // [t.breakpoints.down('xs')]: {
            //     fontSize: '2rem',
            // },
        },
        drawerItem: {
            margin: '2rem auto',
            borderRadius: '78.8418px',
            background: theme.secondary,
            color: theme.primary,
            width: '85%',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: '0 30px',
            boxSizing: 'border-box',
            border: '2px solid',
            borderColor: theme.primary,
            transition: 'background-color 0.2s, color 0.2s',
            '&:hover': {
                background: theme.primary,
                color: theme.secondary,
            },
            // [t.breakpoints.down('sm')]: {
            //     width: '100%',
            //     padding: '0 25px',
            //     height: '55px',
            // },
        },
        MuiDrawer: {
            padding: '0em 1.8em',
            width: '14em',
            fontFamily: ' var(--primaryFont)',
            fontStyle: ' normal',
            fontWeight: ' normal',
            fontSize: ' 24px',
            background: theme.secondary,
            overflow: 'hidden',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
        //     [t.breakpoints.down('sm')]: {
        //         width: '12em',
        //     },
        },
        closebtnIcon:{
            fontSize: '2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: theme.primary,
            position: 'absolute',
            right: 40,
            top: 40,
            transition: 'color 0.2s',
            '&:hover': {
                color: theme.tertiary,
            },
        }
    }))
    const classes=useStyles();
    const handleDrawerOpen = ()=>{
        setOpen(true)
    }
    const handleDrawerClose =()=>{
        setOpen(false);
    }
    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <h1 style={{color:theme.secondary}}>
                𝕽𝖎𝖙𝖊𝖘𝖍
                </h1>
                <DensityMediumIcon className={classes.navMenu} onClick = {handleDrawerOpen} aria-label='Menu' />
            </div>
            <Drawer variant='temporary' onClose={(event,reason)=>{
                if(reason!=='backdropClick'){
                    handleDrawerClose();
                }else if(reason!=='escapeKeyDown'){
                    handleDrawerClose()
                }
            }} anchor='left' open={open} classes={{paper:classes.MuiDrawer}} className='drawer' disableScrollLock={true}>
                <div className='div-closebtn'>
                    <CloseIcon onClick={handleDrawerClose} onKeyDown={(e)=>{
                        if(e.key===' '|| e.key==='Enter'){
                            e.preventDefault();
                            handleDrawerClose();
                        }
                    }} role='button' tabIndex='0' aria-label='Close'/>
                </div>
                <br/>
                <div onClick={handleDrawerClose}>
                    <div className='navLink--container'>
                        <Fade left>
                            <NavHashLink to ='/' smooth='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <HomeIcon/>
                                    <span>Home</span>
                                </div>
                            </NavHashLink>
                        </Fade>
                        <Fade left>
                            <NavHashLink to ='/#about' smooth='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <PersonIcon/>
                                    <span>About</span>
                                </div>
                            </NavHashLink>
                        </Fade>
                        <Fade left>
                            <NavHashLink to ='/#resume' smooth='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <SchoolIcon/>
                                    <span>Education</span>
                                </div>
                            </NavHashLink>
                        </Fade>
                        <Fade left>
                            <NavHashLink to ='/#services' smooth='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <AccountTreeIcon/>
                                    <span>Projects</span>
                                </div>
                            </NavHashLink>
                        </Fade>
                        <Fade left>
                            <NavHashLink to ='/#blog' smooth='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <GroupsIcon/>
                                    <span>Teams</span>
                                </div>
                            </NavHashLink>
                        </Fade>
                        <Fade left>
                            <NavHashLink to ='/#contact' smooth='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <CallIcon/>
                                    <span>Contact</span>
                                </div>
                            </NavHashLink>
                        </Fade>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;
