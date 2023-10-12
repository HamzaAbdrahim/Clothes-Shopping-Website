import { Link } from "react-router-dom"
import assest from "../../../assets/imges"
import { dashbordlist } from "../../../content"
import "../../../scss/pages/dashbord/_sidebar.scss"

const Sidebar = () => {
    const num:number = 2;  
    return (
    <div className="side_bar">
        <img src={assest.logo} alt="logo" className="logo" />
<ul className="sidebar_list">
    {dashbordlist.map((list , index:number) => (
    <Link to={list.path} key={index} style={{marginBottom:index < dashbordlist.length - num ? '.5rem' : ""}} className="item">
    <p className="item_discrption">{list.titel}</p>
    <img src={list.icon} alt="item_img" className="item_img" />
    </Link>
    ))}
</ul>
    </div>
    )
}

export default Sidebar