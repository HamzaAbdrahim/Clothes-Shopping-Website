import "../../../scss/pages/dashbord/authentication/_singup.scss"
import { Outlet  , useNavigate } from "react-router-dom"
import assest from "../../../assets/imges"
import Shadow from "../../shered/Shadow"
import { useEffect } from "react"

const Singup = () => {
    const Navigate = useNavigate();
    const loginstate = localStorage.getItem('authTokenLogin');
    const singupstate = localStorage.getItem('authTokenSingup');
    useEffect(() => {
    if (loginstate && loginstate !== 'undefined' || singupstate && singupstate !== 'undefined' ) {          
    Navigate('/');
    } else {
    Navigate('/auth');              
    }
    }, [loginstate , singupstate])
    
    return (
    <>
    <Shadow />
    <section className="Singup">
    <div className="section_one">
    <img src={assest.singup} alt="singup" className="singup_img" />
    </div>
    <Outlet />
    </section>
    </>
    )
}

export default Singup