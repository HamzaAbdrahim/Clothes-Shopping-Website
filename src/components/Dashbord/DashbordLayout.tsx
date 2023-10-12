import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar"
import "../../scss/pages/dashbord/_dashbord.scss"

const DashbordLayout = () => {
    return (
    <div className="dashbord">
    <Sidebar />
    <div className="outlet">
    <Outlet />
    </div>
    </div>
    );
}

export default DashbordLayout