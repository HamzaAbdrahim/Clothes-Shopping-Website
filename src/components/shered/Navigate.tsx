import { useNavigate } from "react-router-dom"

const Navigate = (path:string) => {
    const Navigate = useNavigate();
    Navigate(path)
}

export default Navigate