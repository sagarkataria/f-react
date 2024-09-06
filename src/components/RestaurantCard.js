import { CDN_URL } from "../utils/constant.js";
const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData)
    const { name, cuisines, costForTwo, areaName, cloudinaryImageId,avgRatingString
    } = resData?.info;
    // console.log(resData)
    return (

        <div className='res-card p-4 m-4 w-[250px]' style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className=''
                src={CDN_URL + cloudinaryImageId}
                alt="image" />
            <div className=''>
                <h3>{name}</h3>
                {/* <h4>{cuisines.join(', ')}</h4> */}
                <h4>{costForTwo}</h4>
                <h4>{areaName}</h4>
                <h4>{avgRatingString}*</h4>
            </div>
        </div>
    )
}

export default RestaurantCard;