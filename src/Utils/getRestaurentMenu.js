import { useEffect, useState } from "react";
import { MENU_URL } from "../Utils/constant";

const getRestaurentMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    let jsondata = await data.json();
    setresInfo(jsondata.data);
  };

  return resInfo;
};

export default getRestaurentMenu;
