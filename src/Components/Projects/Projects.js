import React, { useContext } from 'react';
import './Projects.css'
import {ThemeContext} from '../../contexts/ThemeContext'
import {projectsData} from '../../data/projectsData'
import { Link } from 'react-router-dom';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { makeStyles } from '@mui/styles';
import { Fade } from 'react-reveal';
import { IntegrationInstructionsOutlined, PlayCircleOutlineOutlined } from '@mui/icons-material';

const Projects = () => {
    const {theme} =useContext(ThemeContext)
    const useStyles = makeStyles((t)=>({
            viewAllBtn:{
                color:theme.tertiary,
                backgroundColor:theme.primary,
                transition:'color 0.2s',
                '&:hover':{
                    color:theme.secondary,
                    backgroundColor:theme.primary
                }
            },
            viewArr:{
                color:theme.tertiary,
                backgroundColor:theme.secondary70,
                width:'40px',
                height:'40px',
                padding:'0.5rem',
                fontSize:'1.05rem',
                borderRadius:'50%',
                cursor:'pointer',
                transition:'background-color 0.2s' ,
                '&:hover':{
                    color:theme.tertiary,
                    backgroundColor:theme.secondary
                }
            },
            iconBtn:{
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: 50,
                border: `2px solid ${theme.tertiary}`,
                color: theme.tertiary,
                transition: 'all 0.2s',
                '&:hover': {
                    backgroundColor: theme.secondary,
                    color: theme.primary,
                    transform: 'scale(1.1)',
                    border: `2px solid ${theme.secondary}`,
                },
            },
            icon: {
                fontSize: '1.1rem',
                transition: 'all 0.2s',
                '&:hover': {},
            },
    }))
    const classes=useStyles()
    return (
       <>
        {projectsData.length > 0 && (
             <div className='projects' id='projects' style={{backgroundColor:theme.secondary}}>
                <div className='projects--header'>
                    <h1 style={{color:theme.primary}}>Projects</h1>
                </div>
                <div className='projects--body'>
                    <div className='projects--bodyContainer'>
                        {projectsData.slice(0,3).map(project=>(
                            <Fade bottom>
                                <div className='project--show' style={{backgroundColor:theme.primary400}} 
                                    theme={theme} 
                                    key={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}>
                                    <div className='project--content'>
                                        <h2 id={project.projectName.replace(' ','-').toLowerCase()} style={{color:theme.tertiary}}>
                                            {project.projectName}
                                        </h2>
                                        <img src={project.image} alt={project.projectName} />
                                        <div className='project--showcaseBtn'>
                                            <a href='https://www.google.com' target = '_blank' rel='noreferrer' className={classes.iconBtn}
                                                aria-labelledby={`${project.projectName.replace(' ','-').toLowerCase()} 
                                                ${project.projectName.replace(' ','-').toLowerCase()}-demo`}>

                                                <PlayCircleOutlineOutlined id={`${project.projectName.replace(' ','-').toLowerCase()}-demo`} 
                                                    className={classes.icon} aria-label='Demo'/>
                                            </a>

                                            <a href="https://www.google.com" target = '_blank' rel='noreferrer' className={classes.iconBtn}
                                                aria-labelledby={`${project.projectName.replace(' ','-').toLowerCase()} 
                                                ${project.projectName.replace(' ','-').toLowerCase()}-demo`}>
                                                <IntegrationInstructionsOutlined id={`${project.projectName.replace(' ','-').toLowerCase()}-code`} className={classes.icon} aria-label='Code'/>
                                            </a>
                                        </div>
                                    </div>
                                    <p className='project--desc' style={{background:theme.secondary,color:theme.tertiary}}>
                                        {project.projectDesc}
                                    </p>
                                    <div className='project--lang' style={{background:theme.secondary,color:theme.tertiary80}}>
                                        {project.tags.map((tag,id)=>(
                                            <span key={id}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                    {projectsData.length > 3 && (
                    <div className='projects--viewAll'>
                        <Link to ='/projects'>
                            <button className={classes.viewAllBtn}>
                                ViewAll
                                <ArrowRightAltOutlinedIcon/>
                            </button>
                        </Link>
                    </div>

                    )}
                </div>
             </div>
        )}
       </>
    );
}

export default Projects;
