import React, { useContext } from 'react';
import './Projects.css'
import {ThemeContext} from '../../contexts/ThemeContext'
import {projectsData} from '../../data/projectsData'
import { Link } from 'react-router-dom';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { makeStyles } from '@mui/styles';

const Projects = () => {
    const {theme} =useContext(ThemeContext)
    const useStyles = makeStyles((t)=>{

    })
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
                            <div key={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}>

                            </div>
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
