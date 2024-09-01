import RestaurantCard from "./RestaurantCard.js"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";


const Body = () => {
    const [listOfRestautant, setListOfRestaurant] = useState([])
    const [filterRestaurant, setFilterRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json();
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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