import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar"
import "../../scss/pages/dashbord/_dashbord.scss"
import { useEffect } from "react";
import Usersetting from "./Home/Usersetting";
import Publicuser from "./users/Publicuser";

const DashbordLayout = () => {
    const Navigate = useNavigate();
    const [ useracount ] = Publicuser()
    const allowed:boolean[] = useracount.map((item) => item.allwedtodashbord);
    console.log();
    
    useEffect(() => {
    if (!allowed.every((value) => value === true)) {
        Navigate('/')
    }
    }, [useracount])
    
    
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