import html from '../assets/svg/skills/html.svg'
import photoshop from '../assets/svg/skills/photoshop.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import react from '../assets/svg/skills/react.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import java from '../assets/svg/skills/java.svg'
import python from '../assets/svg/skills/python.svg'
import git from '../assets/svg/skills/git.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import nodejs from '../assets/svg/skills/nodejs.svg'

export const skillsImage = (skill)=>{
    const skillID = skill.toLowerCase();
    switch(skillID){
        case 'html' : return html ;
        case 'photoshop' : return photoshop ;
        case 'css' : return css ;
        case 'javascript' : return javascript ;
        case 'react' : return react ;
        case 'bootstrap' : return bootstrap ;
        case 'mongodb' : return mongoDB ;
        case 'tailwind' : return tailwind ;
        case 'cplusplus' : return cplusplus ;
        case 'java' : return java ;
        case 'python' : return python ;
        case 'git' : return git ;
        case 'materialui' : return materialui ;
        case 'nodejs' : return nodejs ;
        default: break;
    }
}