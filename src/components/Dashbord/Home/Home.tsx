import "../../../scss/pages/dashbord/_home.scss"
import Datastate from "./Datastate"
import Lastesorder from "./Lastesorder"
import Usersetting from "./Usersetting"
const Home = () => {
  return (
    <div className="Home">
      <Usersetting />
      <Datastate />
      <Lastesorder />
    </div>
  )
}

export default Home