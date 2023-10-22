import axios from "axios";

const useEdit = ({ url ,  changedItem }: { url: string; changedItem:string|boolean }) => {
    const handleEdit = async () => {
    try {
    await axios.patch(url, changedItem);
    window.location.reload();
    console.log('Item edited successfully');
    } catch (error) {
    console.error('Error editing item:', error);
    }
  };

  return { handleEdit };
};

export default useEdit;