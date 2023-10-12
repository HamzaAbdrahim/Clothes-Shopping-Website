import "../../../scss/pages/dashbord/authentication/_singup.scss"
import { Outlet } from "react-router-dom"
import assest from "../../../assets/imges"
import Shadow from "../../shered/Shadow"

const Singup = () => {
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