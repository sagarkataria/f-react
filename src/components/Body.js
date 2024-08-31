import RestaurantCard from "./RestaurantCard.js"
import resList from "../utils/mockData.js"
import { useState } from "react";


const Body = () => {
    const [listOfRestautant, setListOfRestaurant] = useState(resList)
    // console.log(listOfRestautant)
    return (
        <div className="body">
            <div className='filter'>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filterList = listOfRestautant.filter((res) => parseFloat(res.info.avgRatingString) > 4);
                        setListOfRestaurant(filterList);
                        console.log(filterList);
                    }}
                >
                    Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {
                    (listOfRestautant).map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
                {/* <RestaurantCard resData={resList[0]} /> */}
            </div>
        </div>
    )
}

export default Body