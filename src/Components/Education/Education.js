import React, { useContext } from 'react';
import {educationData} from '../../data/educationData'
import './Education.css'
import Fade from 'react-reveal/Fade'
import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import { ThemeContext } from '../../contexts/ThemeContext';
import { makeStyles } from '@mui/styles';

const Education = () => {
    const {theme} = useContext(ThemeContext)
    
    const useStyles = makeStyles((t)=>({
        educationCard:{
            backgroundColor:theme.primary30,
            "&:hover":{
                backgroundColor:theme.primary50
            },
        },
    }));
    const classes = useStyles();
    return (
        <div className='education' id='resume' style={{backgroundColor:theme.secondary}}>
           <div className='education-body'>
                <div className='education-description'>
                    <h1 style={{color:theme.primary}}>Education</h1>
                    {educationData.map(edu=>(
                        <Fade bottom>
                        <div key={edu.id} className={`education-card ${classes.educationCard}`} >
                            <div className="educard-img" style={{backgroundColor:theme.primary}}>
                                <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                            </div>
                            <div className='education-details'>
                            <h6 style={{color:theme.primary}}>{edu.startYear}-{edu.endYear}</h6>
                            <h4 style={{color:theme.tertiary}}>{edu.course}</h4>
                            <h5 style={{color:theme.tertiary80}}>{edu.institution}</h5>
                            </div>
                        </div>
                        </Fade>
                    ))}
                </div>
                <div className='education-image'>
                    <img src={theme.eduimg} alt=""/>
                </div>
            </div> 
        </div>
    );
}

export default Education;
