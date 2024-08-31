import RestaurantCard from "./RestaurantCard.js"
import resList from "../utils/mockData.js"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";


const Body = () => {
    const [listOfRestautant, setListOfRestaurant] = useState([])
    // console.log(listOfRestautant)
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async() => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json();
        console.log()
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if(listOfRestautant.length===0){
        return <Shimmer/>
    };
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