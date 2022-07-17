import { makeStyles } from '@mui/styles';
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import './Contact.css'
import {contactsData} from '../../data/contactsData'
import {socialsData} from '../../data/socialsData'
import { LocationOnOutlined, Twitter } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton, Snackbar, SnackbarContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; 

const Contact = () => {
    const {theme} = useContext(ThemeContext);
    const [open,setOpen] = useState(false);

    const [name,setName] = useState()
    
    const [email,setEmail] = useState()
    
    const [success, setSuccess] = useState(false);
    
    const [errMsg, setErrMsg] = useState('');

    const [message,setMessage] = useState()

    const useStyles = makeStyles((t)=>({
        input:{
            border:`4px solid ${theme.primary80}`,
            backgroundColor:`${theme.secondary}`,
            color:`${theme.tertiary}`,
            transition: 'border 0.2s ease-in-out',
            '&focus':{
                border:`4px solid ${theme.primary600}`,
            }

        },
        message:{
            border:`4px solid ${theme.primary80}`,
            backgroundColor:`${theme.secondary}`,
            color:`${theme.tertiary}`,
            transition: 'border 0.2s ease-in-out',
            '&focus':{
                border:`4px solid ${theme.primary600}`,
            }
        },
        label:{
            backgroundColor:`${theme.secondary}`,
            color:`${theme.primary}`,
            fontWeight:600,
            padding:'0 5px',
            transform: 'translate(-10px,50%)',
            display:'inline-flex',
        },
        submitBtn:{
            backgroundColor:theme.primary,
            color:theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover':{
                transform: 'scale(1.08)',
                color:theme.secondary,
                backgroundColor:theme.tertiary,
            }
        },
        detailsIcon:{
            backgroundColor:theme.primary,
            color:theme.secondary,
            borderRadius:'50%',
            width:'45px',
            height:'45px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            fontSize:'23px',
            transition: '250ms ease-in-out',
            flexShrink:0,
            '&:hover':{
                transform:'scale(1.1)',
                color:theme.secondary,
                backgroundColor:theme.tertiary
            }
        },
        socialIcon:{
            width:'45px',
            height:'45px',
            borderRadius:'50%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            fontSize:'21px',
            backgroundColor:theme.primary,
            color:theme.secondary,
            transition:'250ms ease-in-out',
            '&:hover':{
                transform:'scale(1.1)',
                color:theme.secondary,
                backgroundColor:theme.tertiary,
            }
        }
    }))

    const classes = useStyles();
    
    const handleClose = (event,reason)=>{
        if(reason==='clickaway'){
            return;
        }
        setOpen(false)
    }
    
    const handleContactForm =(e)=>{
        e.preventDefault();
        if(name && email && message){
            // if(isEmail(email)){
            if((email)){
                const responseData = {
                    name:name,
                    email:email,
                    message:message,
                }
                alert('Message Sent')
                setSuccess(true)
            }
        }
    }
    return (
        <div className='contacts' id='contacts' style={{backgroundColor:theme.secondary}}>            
            <div className='contacts--container'>

                <h1 style={{color:theme.primary}}>Contact</h1>

                <div className='contacts-body'>

                    <div className='contacts-form'>
                        <form onSubmit={handleContactForm}>

                            <div className='input-container'>
                                <label htmlFor='Name' className={classes.label}>Name</label>
                                <input placeholder='Ritesh' value={name} onChange={(e)=>setName(e.target.value)} 
                                type='text' name='Name' className={`form-input ${classes.input}`}/>
                            </div>

                            <div className='input-container'>
                                <label htmlFor='Email' className={classes.label}>Email</label>
                                <input placeholder='Ritesh@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)} 
                                type='text' name='Email' className={`form-input ${classes.input}`}/>
                            </div>

                            <div className='input-container'>
                                <label htmlFor='Message' className={classes.label}>Message</label>
                                <textarea placeholder='Type your message' value={message} onChange={(e)=>setMessage(e.target.value)} 
                                type='text' name='Message' className={`form-message ${classes.message}`}/>
                            </div>

                            <div className='submit-btn'>
                                <button type='submit' className={classes.submitBtn}>

                                    <p>{!success ? 'Send' : 'Sent'}</p>

                                    <div className='submit-icon'>
                                        <SendOutlinedIcon className='send-icon' style={{
                                            animation:!success?'initial': 'fly 0.8s linear both' ,
                                            position:success?'absolute':'initial',
                                            opacity:success?'0':'1'
                                        }}/>
                                        <CheckOutlinedIcon className='success-icon' style={{
                                            display:!success?'none':'inline-flex',
                                            opacity:!success?'0':'1'
                                            }}/>
                                    </div>

                                </button>
                            </div>
                        </form>
                        <Snackbar anchorOrigin={{
                            vertical:'top',
                            horizontal:'center'
                        }}
                        open={open}
                        autoHideDuration={4000}
                        onClose={handleClose}>
                            <SnackbarContent action={
                                <React.Fragment>
                                    <IconButton size='small' aria-label = 'close' color='inherit' onClick={handleClose}>
                                        <CloseIcon fontSize='small'/>
                                    </IconButton>
                                </React.Fragment>
                            } message={errMsg}/>
                        </Snackbar>
                    </div>


                    <div className='contacts-details'>
                        <a href={`mailto:${contactsData.email}`} className='personal-details'>

                            <div className={classes.detailsIcon}>
                                <AlternateEmailIcon/>
                            </div>

                            <p style={{color:theme.tertiary}}>{contactsData.email}</p>

                        </a>

                        <a href={`tel:${contactsData.phone}`} className='personal-details'>

                            <div className={classes.detailsIcon}>
                                <PhoneIcon/>
                            </div>

                            <p style={{color:theme.tertiary}}>{contactsData.phone}</p>

                        </a>

                        <div className='personal-details'>

                            <div className={classes.detailsIcon}>
                                <LocationOnOutlined/>
                            </div>

                            <p style={{color:theme.tertiary}}>{contactsData.address}</p>

                        </div>

                        <div className='socialmedia-icons'>

                            {socialsData.twitter && (
                                <a 
                                    href={socialsData.twitter} 
                                    target='_blank' 
                                    rel='noreferrer' 
                                    className={classes.socialIcon}
                                >
                                    <Twitter aria-label='Twitter'/>
                                </a>
                            )}

                            {socialsData.github && (
                                <a href={
                                    socialsData.github} 
                                    target='_blank' 
                                    rel='noreferrer' 
                                    className={classes.socialIcon}>

                                    <GitHubIcon aria-label='GitHub'/>
                                </a>
                            )}

                            {socialsData.facebook && (
                                <a href={
                                    socialsData.facebook} 
                                    target='_blank' 
                                    rel='noreferrer' 
                                    className={classes.socialIcon}>

                                    <FacebookIcon aria-label='Facebook'/>

                                </a>
                            )}

                            {socialsData.linkedIn && (
                                <a href={
                                    socialsData.linkedIn} 
                                    target='_blank' 
                                    rel='noreferrer' 
                                    className={classes.socialIcon}>

                                    <LinkedInIcon aria-label='LinkedIn'/>

                                </a>
                            )}

                            {socialsData.instagram && (
                                <a href={socialsData.instagram} 
                                target='_blank' 
                                rel='noreferrer' 
                                className={classes.socialIcon}>

                                    <InstagramIcon aria-label='Facebook'/>

                                </a>
                            )}

                        </div>
                    </div>
                </div>
            </div>
            <img src={theme.contactsimg} alt='contacts' className='contacts--img'/>
        </div>
    );
}

export default Contact;
