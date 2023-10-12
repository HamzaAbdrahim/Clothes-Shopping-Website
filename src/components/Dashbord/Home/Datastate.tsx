import { stateorder } from "../../../content"

const Datastate = () => {
  return (
    <div className="orderstate_container">
        {stateorder.map((orderstate , index:number) => (
            <div key={index} className="order" style={{background:orderstate.bgcolor}}>
                <h1 className="order_titel">{orderstate.titel}</h1>
                <img className="order_img" src={orderstate.img} alt="order_icon" />
                <p className="order_amount">{orderstate.number}</p>
            </div>
        ))}
    </div>
  )
}

export default Datastate