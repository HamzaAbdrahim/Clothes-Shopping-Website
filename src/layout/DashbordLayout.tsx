import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Usersetting from "../components/Dashbord/Home/Usersetting";
import Sidebar from "../components/Dashbord/sidebar/Sidebar";
import Publicuser from "../components/Dashbord/users/Publicuser";
import '../scss/pages/dashbord/_dashbord.scss'

export default function Dashbordlayout() {
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


