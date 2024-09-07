import RestaurantCard, {withPromotedLabel}from "./RestaurantCard.js"
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useBody from "../utils/useBody.js";
import { withPromotedLabel } from "./RestaurantCard.js";



const Body = () => {
    // console.log(RestaurantCard);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
   
    const onlineStatus = useOnlineStatus();
    const { listOfRestautant, filterRestaurant, searchText, setSearchText,setFilterRestaurant } = useBody();
    if (onlineStatus === false) {
        return <h1>Looks like your internet is disconnect!</h1>
    }
    return filterRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className='flex'>
                <div className="search m-4 p-4">
                    <input className="shadow appearance-none border rounded w-15 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                    />
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
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
               <div className="m-4 p-4">
               <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={() => {
                        const filterList = listOfRestautant.filter(
                            (res) => (res.info.avgRatingString) > 4);
                        setFilterRestaurant(filterList);
                    }}
                >
                    Top Rated Restaurants
                </button>
               </div>
            </div>
            <div className='flex flex-wrap w-5/6 m-auto justify-center'>
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