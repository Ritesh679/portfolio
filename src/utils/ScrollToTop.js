import { useEffect } from "react";
import { useNavigate } from "react-router";

function ScrollToTop(){
    // const history = useNavigate();
    useEffect((history)=>{
        const unlisten=() => history(()=>{
            window.scrollTo(0,0);
        });
        return ()=>{
            unlisten();
        }
    });
    return (null)
}
export default ScrollToTop;