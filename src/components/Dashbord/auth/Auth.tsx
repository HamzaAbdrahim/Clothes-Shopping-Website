import "../../../scss/pages/dashbord/authentication/_singup.scss"
import { Outlet  } from "react-router-dom"
import assest from "../../../assets/imges"
import Shadow from "../../shered/Shadow"
import { ToastContainer } from "react-toastify"
import ProtecteAuth from "../../../protectedroutes/ProtecteAuth"

const Auth = () => {    
    return (
    <ProtecteAuth>
    <Shadow />
    <section className="Singup">
    <div className="section_one">
    <img src={assest.singup} alt="singup" className="singup_img" />
    </div>
    <Outlet />
    </section>
    <ToastContainer position="top-right" />
    </ProtecteAuth>
    )
}

export default Auth