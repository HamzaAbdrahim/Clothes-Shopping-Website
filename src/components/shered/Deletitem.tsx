import axios from "axios";

export const handremoveorder = async ({id ,url} : {id:number , url:string}) => {
  try {
  const response = await axios.delete(`${url}/${id}`);
  window.location.reload();
  console.log(response);
  } catch (error) {
  console.error("Error fetching data:", error);
  }
  }