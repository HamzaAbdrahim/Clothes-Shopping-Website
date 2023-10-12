import assest from "../../../assets/imges"

const Usersetting = () => {
    return (
    <div className="Usersetting">
        <h1 className="titel">لوحة التحكم</h1>
        <div className="user_info">
            <img src={assest.notification} alt="notification" className="notification" />
            <p>Ahsan Iqbal<span>Admin</span></p>
            <img src={assest.profil_img} alt="profil_img"  className="profil_img"/>
        </div>
    </div>
    )
}

export default Usersetting