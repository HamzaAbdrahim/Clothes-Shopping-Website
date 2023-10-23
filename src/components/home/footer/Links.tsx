import { NavLink } from "react-router-dom"
import { bar } from "../../../content"

const Links = ():JSX.Element => {
  return (
    <div className="important_links">
        <h1 className="titel_section">روابط مهمة</h1>
        <ul className="links">
        {bar.map((link , index:number) => (
            <NavLink key={index} className="link" to={link.path}>{link.titel}</NavLink>
        ))}
        </ul>
    </div>
  )
}

export default Links