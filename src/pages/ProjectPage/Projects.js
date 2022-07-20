import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import {headerData} from '../../data/headerData'
import {ThemeContext} from '../../contexts/ThemeContext'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import {projectsData} from '../../data/projectsData'
import { IntegrationInstructionsOutlined, PlayCircleOutlineOutlined } from '@mui/icons-material';
import { Fade } from 'react-reveal';
import './Project.css'
const Projects = () => {
    const {theme} = useContext(ThemeContext)
    const useStyles = makeStyles((t)=>({
        home:{
            color:theme.secondary,
            position:'absolute',
            top:25,
            left:25,
            padding:'7px',
            borderRadius:'50%',
            boxSizing:'content-box',
            fontSize:'2rem',
            cursor: 'pointer',
            boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            '&:hover':{
                color: theme.tertiary,
                transform: 'scale(1.1)',
            }
        }
    }));
    const classes = useStyles();
    const filteredArticles = projectsData.filter((project) => {
        const content = project.projectName + project.projectDesc + project.tags
        return content.toLowerCase()
    })
    return (
        <div className='project--page' style={{backgroundColor:theme.secondary}}>
            <Helmet><title>{headerData.name}</title></Helmet>
            <div className='projectPage--header' style={{backgroundColor:theme.primary}}>
                <Link to ='/'>
                    <HomeIcon className={classes.home}/>
                </Link>
                <h1 style={{color:theme.secondary}}>Projects</h1>
            </div>

            <div className='projectPage--container'>
                <div className='project-container'>
                    <Grid className='project-grid' container direction='row' alignItems='center' justifyContent='center'>
                        {filteredArticles.map(project=>(
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
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Projects;
