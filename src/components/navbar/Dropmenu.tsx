import assest from "../../assets/imges"
import { bar } from "../../content"
import "../../scss/pages/_navbar.scss"

const Dropmenu = (prop:any) => {
  return (
    <>
    <div className="shadow">
    </div>
    <div className="bar Dropmenu">
      <img src={assest.close} alt="close" style={{marginBottom:'1rem' , cursor:"pointer"}} onClick={prop.onclick} />
      <ul>
        {bar.map((ele , index) => (
          <li key={index} className={`bar_element${index}`}>
            <h1>{ele.titel}</h1>
            <img src={ele.icon} alt="icon" />
            </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Dropmenu