import { useEffect,useState } from 'react';
import { MENU_API } from "../utils/constant.js";


const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        // const array = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
        setResInfo(json);
    }
    return resInfo;
}
export default useRestaurantMenu;