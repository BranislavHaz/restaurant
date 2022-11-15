import { useState, useEffect } from "react";
import axios from "axios";

const useFetchMenu = (unix: number) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/menu/get?unix=${unix}`)
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        setData([]);
      });
  }, [unix]);

  return data;
};

export default useFetchMenu;
