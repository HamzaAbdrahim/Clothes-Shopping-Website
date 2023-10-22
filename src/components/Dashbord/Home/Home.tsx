import "../../../scss/pages/dashbord/_home.scss"
import Datastate from "./Datastate"
import Lastesorder from "./Lastesorder"
const Home = () => {
  return (
    <div className="Home">
      <Datastate />
      <Lastesorder />
    </div>
  )
}

export default Home