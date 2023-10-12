import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
const Loding = () => {
  return (
    <div className="Loding">
<FontAwesomeIcon className='loding_icon' icon={faCog} size='6x' spin style={{color: "#000000",}} />
    </div>
  )
}

export default Loding