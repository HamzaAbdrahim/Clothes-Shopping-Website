import "../../scss/components/_submit.scss"
const Submit = ({value , click}: {value:string , click:(submission: { email: string; password: string; }) => Promise<void>}) => {
  return (
    <input onClick={() => click} type="submit" value={value} />
  )
}

export default Submit