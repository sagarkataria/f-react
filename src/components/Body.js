import RestaurantCard from "./RestaurantCard.js"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useBody from "../utils/useBody.js";


const Body = () => {
   
    const onlineStatus = useOnlineStatus();
    const { listOfRestaurant, filterRestaurant, searchText, setSearchText } = useBody();
    if (onlineStatus === false) {
        return <h1>Looks like your internet is disconnect!</h1>
    }
    return filterRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className='filter'>
                <div className="search">
                    <input className="search-box" type="text" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                    />
                    <button className="search-btn"
                        onClick={() => {
                            const filterCardRes = listOfRestautant.filter((res) => {
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            });
                            console.log(filterCardRes);
                            setFilterRestaurant(filterCardRes);
                        }}
                    >
                        search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filterList = listOfRestautant.filter(
                            (res) => (res.info.avgRatingString) > 4);
                        setFilterRestaurant(filterList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {
                    (filterRestaurant).map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={'/restaurant/' + restaurant.info.id}
                        >
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body