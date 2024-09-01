import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant.js";

const RestaurantMenu = () => {

    const [menuData, setMenuData] = useState(null);
    const {resId} = useParams();
   

    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        const array = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        setMenuData(array)
        console.log(menuData)
    }
    return menuData === null ? (<Shimmer />) : (
        <div className="menu">
            <h1>{menuData[0]?.card?.info?.name}</h1>
            <ul>
                {menuData.map((item, index) => (
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu