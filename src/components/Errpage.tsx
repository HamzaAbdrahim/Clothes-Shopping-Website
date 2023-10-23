import { NavLink } from "react-router-dom"
import assest from "../assets/imges"
import "../scss/components/_errpage.scss"

const Errpage = () => {
    return (
    <section className="err_page">
    <p className="opps">اوبس</p>
    <h1 className="err_titel">نحن نعمل علي حلاالمشكلة</h1>
    <img src={assest.errpage_img} alt="errpage" />
    <NavLink to="/" className="err_button">الصفحة الرئسية<img src={assest.arrow_back} alt="arrow_back}" /></NavLink>
    </section>
    )
}

export default Errpage