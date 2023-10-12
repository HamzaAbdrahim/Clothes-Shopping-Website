import "../../scss/components/_input.scss"

const Input = (prop:any):JSX.Element => {
  return (
    <label style={{color:prop.dis}} className={`label_sherd ${prop.className}`}  htmlFor="">
    {prop.label}
    <br />
    <input style={{border:`2px solid ${prop.dis}`}} className={`input_sherd ${prop.className}`} type={prop.type} name={prop.name} placeholder= {prop.placeholder} />
    </label>  )
}

export default Input