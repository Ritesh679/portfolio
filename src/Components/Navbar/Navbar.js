import React, { useState } from 'react';
import {Nav, NavContainer, NavLinkContainer } from './Navbar.elements'
import {NavHashLink} from 'react-router-hash-link'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person'; 
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import FolderIcon from '@mui/icons-material/Folder';
import CallIcon from '@mui/icons-material/Call';
import { Drawer} from '@mui/material';
import Fade from 'react-reveal/Fade'

const Navbar = () => {
    const [open,setOpen] = useState(false)
    const handleDrawerOpen = ()=>{
        setOpen(true)
    }
    const handleDrawerClose =()=>{
        setOpen(false);
    }
    return (
        <Nav>
            <NavContainer>
                <h1 style={{color:'red'}}>
                    Ritesh
                </h1>
                <DensityMediumIcon onClick = {handleDrawerOpen} aria-label='Menu' />
            </NavContainer>
            <Drawer variant='temporary' onClose={(event,reason)=>{
                if(reason!=='backdropClick'){
                    handleDrawerClose();
                }else if(reason!=='escapeKeyDown'){
                    handleDrawerClose()
                }
            }} anchor='left' open={open} className='drawer' disableScrollLock={true}>
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
                    <NavLinkContainer>
                        <Fade left>
                            <NavHashLink to ='/' smooth='true' duration={2000}>
                                <div>
                                    <HomeIcon/>
                                    <span>Home</span>
                                </div>
                            </NavHashLink>
                        </Fade>
                        <Fade left>
                            <NavHashLink to ='/#about' smooth='true' duration={2000}>
                                <div>
                                    <PersonIcon/>
                                    <span>About</span>
                                </div>
                            </NavHashLink>
                        </Fade>
                        <Fade left>
                            <NavHashLink to ='/#resume' smooth='true' duration={2000}>
                                <div>
                                    <DescriptionIcon/>
                                    <span>Resume</span>
                                </div>
                            </NavHashLink>
                        </Fade>
                        <Fade left>
                            <NavHashLink to ='/#services' smooth='true' duration={2000}>
                                <div>
                                    <SettingsIcon/>
                                    <span>Services</span>
                                </div>
                            </NavHashLink>
                        </Fade>
                        <Fade left>
                            <NavHashLink to ='/#blog' smooth='true' duration={2000}>
                                <div>
                                    <FolderIcon/>
                                    <span>Blog</span>
                                </div>
                            </NavHashLink>
                        </Fade>
                        <Fade left>
                            <NavHashLink to ='/#contact' smooth='true' duration={2000}>
                                <div>
                                    <CallIcon/>
                                    <span>Contact</span>
                                </div>
                            </NavHashLink>
                        </Fade>
                    </NavLinkContainer>
                </div>
            </Drawer>
        </Nav>
    );
}

export default Navbar;
