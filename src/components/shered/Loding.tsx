import "../../scss/components/_loding.scss"
import Shadow from "./Shadow"
const Loding = () => {
return (
    <>
    <Shadow />
<div className="spinner">
<span className="spinner-inner-1"></span>
<span className="spinner-inner-2"></span>
<span className="spinner-inner-3"></span>
</div>
    </>
)
}

export default Loding