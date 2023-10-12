import assest from "../../../assets/imges"

const Closetap = ({close} :{close:any}) => {
  return (
    <div className="Closetap">
        <h1 className="form_titel">إملاء الإستمارة</h1>
        <img src={assest.close_icon} onClick={close} alt="close" />
    </div>
  )
}

export default Closetap