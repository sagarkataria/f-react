import { CDN_URL } from "../utils/constant.js";
import { FaStar } from "react-icons/fa";
const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData)
    const { name, cuisines, costForTwo, areaName, cloudinaryImageId, avgRatingString
    } = resData?.info;
    // console.log(resData)
    return (

        <div className='res-card p-2 m-2 w-[230px] h-80 gap-4 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-110' style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className='h-[200px] w-[230px] rounded-lg '
                src={CDN_URL + cloudinaryImageId}
                alt="image" />
            <div className='flex flex-col'>
                <h3 className="font-bold text-md truncate mt-2">{name}</h3>
                <div className="flex items-center">
                    <FaStar className="text-green-500 mr-2" />
                    <h4 className="text-sm">{avgRatingString}</h4>
                </div>
                <h4 className="text-sm truncate text-gray-700 mt-2">{cuisines.join(', ')}</h4>
                <h4 className="text-sm truncate text-gray-700 mt-2">{areaName}</h4>
            </div>
        </div>
    )
}


// Higher Order Components

// input - RestaurantCard ===>RestaurantCardPramoted

 export const withPromotedLabel = (RestaurantCard) => {
    return () => {
        return (
            <>
                <label>Promoted</label>
                <RestaurantCard />
            </>
        )
    }
}

export default RestaurantCard;