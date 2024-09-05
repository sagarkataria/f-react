
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
const RestaurantMenu = () => {
    const { resId } = useParams();
    const menuData = useRestaurantMenu(resId);
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