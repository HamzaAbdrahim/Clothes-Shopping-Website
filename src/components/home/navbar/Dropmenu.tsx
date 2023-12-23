import assest from "../../../assets/imges"
import { bar } from "../../../content"
import useClickOutside from "../../../hooks/useclickoutside"
import "../../../scss/pages/home/_navbar.scss"

const Dropmenu = (prop:any) => {
  const handeltoggol = () => {
    prop.onclick()
  }

  const Ref = useClickOutside(handeltoggol)

  return (
    <>
    <div className="shadow">
    </div>
    <div ref={Ref} className="bar Dropmenu">
      <img src={assest.close} alt="close" style={{marginBottom:'1rem' , cursor:"pointer" , height:'2rem'}} onClick={prop.onclick} />
      <ul>
        {bar.map((ele , index) => (
          <li key={index} 
          className={`bar_element${index}`}>
            <h1>{ele.titel}</h1>
            </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Dropmenu