import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import {ThemeContext} from '../../contexts/ThemeContext'
import {makeStyles} from '@mui/styles'
import './BackToTop.css'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


const BackToTop = () => {
    const [visible,setVisible] = useState(false);
    const {theme} = useContext(ThemeContext)
    const toggleVisible = () =>{
        const scrolled = document.documentElement.scrollTop;
        if (scrolled>300){
            setVisible(true);
        } else if(scrolled<=300){
            setVisible(false)
        }
    }
    window.addEventListener('scroll',toggleVisible)
    const useStyles = makeStyles(()=>({
        icon:{
            fontSize:'3rem',
            color:theme.tertiary
        }
    }))
    const classes= useStyles();
    const scrollToTop =()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth',

        })
    }
    return (
        <div style={{display: visible ?'inline' : 'none'}} className='BackToTop'>
            <button onClick={scrollToTop} aria-label='Back to top'>
                <ArrowCircleUpIcon className={classes.icon}/>
            </button>
        </div>
    );
}

export default BackToTop;
