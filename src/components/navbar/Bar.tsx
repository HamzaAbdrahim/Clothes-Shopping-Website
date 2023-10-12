import { bar } from "../../content"

const Bar = () => {
  return (
    <div className="bar">
      <ul>
        {bar.map((ele , index) => (
          <li key={index} className={`bar_element${index}`}>
            <h1>{ele.titel}</h1>
            <img src={ele.icon} alt="icon" />
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Bar