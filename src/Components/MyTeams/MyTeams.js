import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './MyTeams.css'
import { teamsData } from '../../data/teamsData';

const MyTeams = () => {
    const {theme} = useContext(ThemeContext);
    const teamsBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `${theme.primary30}`
    }

    
    return (
        <div className='myteams' style={{backgroundColor:theme.secondary}}>
            <div className='myTeams-header'>
                <h1 style={{color:theme.primary}}>My Teams</h1>
            </div>
            <div className='myteams--body'>
            <div className='teams--bodyContainer'>
                        {teamsData.map(team=>(
                            <div className='teams--box' key={team.id} style={teamsBoxStyle}>
                                <img src={team.image} alt = {team.name}/>
                                <h3 style={{color:theme.tertiary}}>{team.name}</h3>
                                <h5 style={{color:theme.tertiary80}}>{team.designation}</h5>

                            </div>
                        ))}
                    </div>
            </div>
            
        </div>
    );
}

export default MyTeams;
