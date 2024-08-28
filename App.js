import React from 'react'
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ychB0gzKUiciTunIPeII_aIoptW3k81YQpa0wryEFA&s" alt="" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {resData} = props;
    return (

        <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className='res-logo'
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/4373cf41-dc90-45b2-970a-0b16e4e3836c_570254.jpg"
                alt="" />
            <div className=''>
                <h3>{resData.name}</h3>
                <h4>{resData.cuisines.join(', ')}</h4>
                <h4>{resData.costForTwo}</h4>
            </div>
        </div>
    )
}

const resObj = {
    "id": "702769",
    "name": "La Pino'z Pizza",
    "cloudinaryImageId": "5fe4444a065b60c4fe39ef975222c12b",
    "locality": "World One",
    "areaName": "Sector 90",
    "costForTwo": "₹400 for two",
    "cuisines": [
        "Pizzas",
        "Pastas",
        "Beverages",
        "Fast Food",
        "Italian",
        "Desserts"
    ],
    "avgRating": 4.2,
    "parentId": "4961",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "promoted": true,
    "adTrackingId": "cid=17608343~p=0~adgrpid=17608343#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=702769~eid=0733916d-043b-44be-b69f-83779d60614b~srvts=1724865993177~collid=45995",
    "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 3.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.9 km",
        "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
        "nextCloseTime": "2024-08-29 05:00:00",
        "opened": true
    },
    "badges": {

    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
        "entityBadges": {
            "textBased": {

            },
            "imageBased": {

            },
            "textExtendedBadges": {

            }
        }
    },
    "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
        }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
}


const Body = () => {
    return (
        <div className="body">
            <div className='search'>
                Search
            </div>
            <div className='res-container'>
                <RestaurantCard resData={resObj} />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);