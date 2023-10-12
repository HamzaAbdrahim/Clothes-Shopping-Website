import Links from "./Links"
import '../../scss/pages/_footer.scss'
import Howus from "./Howus"
import Contact from "./Contact"

const Footer = ():JSX.Element => {
  return (
    <div className="footer_container">
        <Links />
        <Howus />
        <Contact />
    </div>
  )
}

export default Footer