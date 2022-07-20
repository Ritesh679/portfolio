import React, { useContext } from 'react';
import {educationData} from '../../data/educationData'
import './Education.css'
import { ThemeContext } from '../../contexts/ThemeContext';
import EducationCard from './EducationCard';

const Education = () => {
    const {theme} = useContext(ThemeContext)

    return (
        <div className='education' id='resume' style={{backgroundColor:theme.secondary}}>
           <div className='education-body'>
                <div className='education-description'>
                    <h1 style={{color:theme.primary}}>Education</h1>
                    {educationData.map(edu=>(
                        <EducationCard key={edu.id} id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className='education-image'>
                    <img src='svg/education.svg' alt=""/>
                </div>
            </div> 
        </div>
    );
}

export default Education;
