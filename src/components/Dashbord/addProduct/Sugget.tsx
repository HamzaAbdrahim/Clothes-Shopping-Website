import { useDispatch, useSelector } from "react-redux";
import { additem } from "../../../store/setadedarray";

const Sugget = ({array }: {array:string[] }) => {
  const dispatch = useDispatch();
  const item = useSelector((state:any) => state.itemsSlice)
  console.log(item);
  
  return (
    <ul className="selected_option">
      {array.map((ele:string, index: number) => (
        <li onClick={() => dispatch(additem(ele))} className="size" key={index}>
          {ele}
        </li>
      ))}
    </ul>
  );
}

export default Sugget;