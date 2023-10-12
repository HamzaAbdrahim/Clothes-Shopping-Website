import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproduct } from "../../../../store/fetechproduct";
import { AppDispatch } from "../../../../store/store";
import "../../../../scss/pages/dashbord/_product.scss";
import assest from "../../../../assets/imges";
import axios from "axios";
import Loding from "../../../shered/Loding";

const Curddate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [loding , setloding] = useState<boolean>(false)
  const product = useSelector((state: any) => state.fetchedproduct.data);
  
  console.log(product);

  useEffect(() => {
    dispatch(getproduct());
  }, []);

  const handelremove = async (id: any) => {
    setloding(true)
    console.log(id);
    const url = `http://localhost:3000/products/${id}`;
    try {
      await axios.delete(url);
      window.location.reload();
      console.log('Item deleted successfully');
      
      setloding(false)
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <>
    {loding ? (<Loding /> ) : ("")}
    <div className="Curddate">
      <h1 className="titel">المنتجات</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">إسم المنتج</th>
            <th scope="col">سعر المنتج</th>
            <th scope="col">احجام المنتج</th>
            <th scope="col">الوان المنتج</th>
            <th scope="col">صورة المنتج</th>
            <th scope="col">(تعديل/حدف) المنتج</th>
          </tr>
        </thead>
        {product.map((item: any) => (
          <tbody key={item.id}>
            <tr>
              <th className="id">{item.id}</th>
              <th>{item.name}</th>
              <th>{item.price}</th>
              {item.sizes && (
                <th className="size_container">
                  {item.sizes.map((size: any, index: number) => (
                    <li
                      style={{
                        marginBottom:
                          index !== item.sizes.length - 1 ? "1rem" : "",
                      }}
                      key={index}
                    >
                      {size}
                    </li>
                  ))}
                </th>
              )}
              <th className="color_container">
                {item.colors &&
                  item.colors.map((color: string, index: number) => (
                    <span
                      key={index}
                      className="color_item"
                      style={{
                        backgroundColor: color,
                        marginLeft:
                          index !== item.sizes.length ? ".5rem" : "",
                      }}
                    ></span>
                  ))}
              </th>
              <th className="product_img">
                <img src={item.img || assest.hijab_two} alt="" />
              </th>
              <th>
                <div className="Buttons">
                  <button
                    onClick={() => handelremove(item.id)}
                    className="delet_item"
                  >
                    حذف المنتج
                  </button>
                  <button className="edit_button"> تعديل علي المنتج</button>
                </div>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
    </>
  );
};

export default Curddate;