import axios from "axios";

const fetchMenu = async (unix: number) => {
  return await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/menu/get?unix=${unix}`)
    .then((res) => res.data)
    .catch(() => []);
};

export default fetchMenu;
