import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Achievements.css'
import {achievementData} from '../../data/achievementData'
import AchievementCard from './AchievementCard';

const Achievements = () => {
    const {theme}  = useContext(ThemeContext)
    return (
        <>
        {achievementData.achievements.length > 0 && (
        <div className='achievements' id='achievement' style={{backgroundColor:theme.secondary}}>
            <div className='achievement-body'>
                <h1 style={{color:theme.primary}}>Achievements</h1>
                <h4 style={{color:theme.tertiary}}>{achievementData.bio}</h4>
            </div>
            <div className='achievement-cards'>
                {achievementData.achievements.map((ach)=>(
                    <AchievementCard key={ach.id} id={ach.id} title={ach.title} details={ach.details} date={ach.date} field={ach.field} image={ach.image} />
                ))}
            </div>
        </div>
        )}
        </>
    );
}

export default Achievements;
