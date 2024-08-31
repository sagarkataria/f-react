import RestaurantCard from "./RestaurantCard.js"
import resList from "../utilits/mockData.js"


const Body = () => {
    return (
        <div className="body">
            <div className='search'>
                Search
            </div>
            <div className='res-container'>
                {
                    (resList).map((restaurant) => (
                        <RestaurantCard resData={restaurant} />
                    ))
                }
                {/* <RestaurantCard resData={resList[0]} /> */}
            </div>
        </div>
    )
}

export default Body