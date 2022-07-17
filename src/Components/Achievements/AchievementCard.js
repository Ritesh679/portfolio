import { FolderOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import { Fade } from 'react-reveal';
import { ThemeContext } from '../../contexts/ThemeContext';

const AchievementCard = ({id,title,details,date,field,image}) => {
    const {theme} = useContext(ThemeContext);
    const useStyles = makeStyles((t)=>({
        achievementCard:{
        backgroundColor:theme.primary30,
        "&:hover":{
            backgroundColor:theme.primary50
        }}
    }))
    const classes = useStyles();;
    return (
        <Fade bottom>
        <div key={id} className={`achievement-card ${classes.achievementCard}`} >
            <div className="achievecard-content">
                <div className='achievecard-details1'>
                    <h2 style={{color:theme.tertiary}}>{title}</h2>
                    <p style={{color:theme.tertiary80}}>{details}</p>
                </div>
            </div>
            <div className='achievecard-details2' style={{color:theme.primary}}>
                <h5>{date}</h5>
                <div className='achievecard-field'>
                    <FolderOutlined/>
                    <h5>{field}</h5>
                </div>
            </div>
            <div className='achievecard-imgcontainer'>
                <img src={image} alt=""/>
            </div>
        </div>
        </Fade>
    );
}

export default AchievementCard;
