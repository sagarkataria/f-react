
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
const RestaurantMenu = () => {
    const { resId } = useParams();
    const menuData = useRestaurantMenu(resId);
    // {name} = menuData;
    // console.log(menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categoriesArray = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const text = menuData?.data?.cards[0]?.card?.card?.text;
    console.log(menuData)

    const categories = categoriesArray.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    return menuData === null ? (<Shimmer />) : (
        <div className="w-[50%] m-auto justify-start mt-3 ">
            <h1 className="text-2xl font-bold">{text} { }</h1>

            {categories.map((category) => (
                <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} />
            ))}

        </div>
    )
}

export default RestaurantMenu