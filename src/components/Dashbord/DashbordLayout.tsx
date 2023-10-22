import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar"
import "../../scss/pages/dashbord/_dashbord.scss"
import { useEffect } from "react";
import Usersetting from "./Home/Usersetting";
import Publicuser from "./users/Publicuser";

const DashbordLayout = () => {
    const Navigate = useNavigate();
    const [ useracount ] = Publicuser()
    console.log();
    
    useEffect(() => {
    if (useracount.map((item) => item.allwedtodashbord !== true)) {
        Navigate('/')
    }
    }, [useracount , Navigate ])
    
    
    return (
    <div className="dashbord">
    <Sidebar />
    <div className="outlet">
    <Usersetting />
    <Outlet />
    </div>
    </div>
    );
}

export default DashbordLayout