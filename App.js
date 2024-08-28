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
    const { resData } = props;
    const {name , cuisines , costForTwo , areaName,cloudinaryImageId} = resData?.info;
    console.log(resData)
    return (

        <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className='res-logo'
                src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId}
                alt="image" />
            <div className=''>
                <h3>{name}</h3>
                {/* <h4>{cuisines.join(', ')}</h4> */}
                <h4>{costForTwo}</h4>
                <h4>{areaName}</h4>
            </div>
        </div>
    )
}

const resList = {
    "restaurants": [
        {
            "info": {
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
                "adTrackingId": "cid=17608343~p=0~adgrpid=17608343#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=702769~eid=df66bf10-6e0d-4674-a752-fafe93014422~srvts=1724864726925~collid=45995",
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
                        "textExtendedBadges": {

                        },
                        "textBased": {

                        },
                        "imageBased": {

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
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=702769",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "594685",
                "name": "Chinese Wok",
                "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                "locality": "Gautam Buddha Nagar",
                "areaName": "Sector 110",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Chinese",
                    "Asian",
                    "Tibetan",
                    "Desserts"
                ],
                "avgRating": 3.9,
                "parentId": "61955",
                "avgRatingString": "3.9",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 0.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "0.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-29 01:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textExtendedBadges": {

                        },
                        "textBased": {

                        },
                        "imageBased": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹149"
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
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=594685",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "570254",
                "name": "Burger King",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/4373cf41-dc90-45b2-970a-0b16e4e3836c_570254.jpg",
                "locality": "sector 129",
                "areaName": "sector 129",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "American"
                ],
                "avgRating": 4.3,
                "parentId": "166",
                "avgRatingString": "4.3",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 4.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-29 01:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textExtendedBadges": {

                        },
                        "textBased": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹99"
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
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=570254",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "574260",
                "name": "Thalairaj Biryani",
                "cloudinaryImageId": "x35kjzswa1lvmma3yfde",
                "locality": "Vishwkarma Road",
                "areaName": "Sector 98",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Andhra",
                    "Biryani",
                    "Hyderabadi",
                    "South Indian",
                    "Indian",
                    "Kebabs",
                    "Snacks",
                    "Beverages"
                ],
                "avgRating": 4.4,
                "parentId": "433875",
                "avgRatingString": "4.4",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 4.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-29 01:00:00",
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
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
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
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=574260",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "819858",
                "name": "Foodies Bites",
                "cloudinaryImageId": "90012597629321295211c3881c8bb0af",
                "locality": "Sector 50",
                "areaName": "Sector 50",
                "costForTwo": "₹450 for two",
                "cuisines": [
                    "Biryani",
                    "Punjabi",
                    "Mughlai",
                    "Hyderabadi",
                    "Indian",
                    "Tandoor",
                    "Afghani",
                    "Kebabs",
                    "Snacks"
                ],
                "avgRating": 3.7,
                "parentId": "464466",
                "avgRatingString": "3.7",
                "totalRatingsString": "50+",
                "promoted": true,
                "adTrackingId": "cid=16680674~p=1~adgrpid=16680674#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=819858~eid=ac74fc96-c194-46a3-916b-ac2de0eda481~srvts=1724864726925~collid=45995",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 4.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-28 23:59:00",
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
                    "header": "15% OFF",
                    "subHeader": "UPTO ₹80"
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
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=819858",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "254106",
                "name": "McDonald's",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/b6242b56-7d42-4dca-affc-be5709b70a5b_254106.JPG",
                "locality": "Advant IT Park",
                "areaName": "Sector 135",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "American"
                ],
                "avgRating": 4.5,
                "parentId": "630",
                "avgRatingString": "4.5",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 6.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "6.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-29 00:45:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {

                },
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textBased": {

                        },
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                                        "description": "Delivery!"
                                    }
                                }
                            ]
                        },
                        "textExtendedBadges": {

                        }
                    }
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
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=254106",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "400159",
                "name": "Grameen Kulfi",
                "cloudinaryImageId": "zx1gzp8u2pdhqijodosv",
                "locality": "Ghari Shahdara",
                "areaName": "Sector 141",
                "costForTwo": "₹120 for two",
                "cuisines": [
                    "Ice Cream",
                    "Desserts"
                ],
                "avgRating": 4.7,
                "veg": true,
                "parentId": "12175",
                "avgRatingString": "4.7",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 5.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "5.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-29 00:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textBased": {

                        },
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                }
                            ]
                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹99"
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
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=400159",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "646878",
                "name": "Wow! China",
                "cloudinaryImageId": "95982cfa57cb3b7e504f2015c375fd55",
                "locality": "Sec 129",
                "areaName": "Gulshan",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Tibetan",
                    "Chinese",
                    "Asian",
                    "Snacks",
                    "Continental",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 3.6,
                "parentId": "226836",
                "avgRatingString": "3.6",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 4.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-29 02:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textExtendedBadges": {

                        },
                        "textBased": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹129"
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
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=646878",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "920455",
                "name": "CHAMPARAN SWAAD",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/3/eb41c2e1-1bcb-4297-a49c-1ad3503c0ea3_920455.jpg",
                "locality": "Anand Complex",
                "areaName": "Sector 49 ",
                "costForTwo": "₹299 for two",
                "cuisines": [
                    "Bihari",
                    "Indian",
                    "Biryani",
                    "Momos",
                    "Tandoor",
                    "Snacks"
                ],
                "avgRating": 3.4,
                "parentId": "534075",
                "avgRatingString": "3.4",
                "totalRatingsString": "20+",
                "promoted": true,
                "adTrackingId": "cid=17668377~p=2~adgrpid=17668377#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=920455~eid=ab45c48c-9e69-435d-ae2f-47168c68e573~srvts=1724864726925~collid=45995",
                "sla": {
                    "deliveryTime": 28,
                    "lastMileTravel": 3.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "3.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-28 23:30:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textExtendedBadges": {

                        },
                        "textBased": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "10% OFF",
                    "subHeader": "UPTO ₹40"
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
                "isNewlyOnboarded": true,
                "restaurantOfferPresentationInfo": {

                },
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=920455",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "28797",
                "name": "Domino's Pizza",
                "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
                "locality": "A 3rd Block",
                "areaName": "Sector 110",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Pastas",
                    "Desserts"
                ],
                "avgRating": 4.4,
                "parentId": "2456",
                "avgRatingString": "4.4",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 0.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "0.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-29 00:55:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textBased": {

                        },
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                        "description": "Delivery!"
                                    }
                                }
                            ]
                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹260"
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
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=28797",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "594715",
                "name": "Big Bowl",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_594715.JPG",
                "locality": "Block- A",
                "areaName": "Sector 110",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Chinese",
                    "Tibetan",
                    "Desserts"
                ],
                "avgRating": 4.1,
                "parentId": "434792",
                "avgRatingString": "4.1",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 19,
                    "lastMileTravel": 0.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "0.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-29 01:00:00",
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
                    "header": "ITEMS",
                    "subHeader": "AT ₹149"
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
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=594715",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "750360",
                "name": "Daily Kitchen - Homely Meals",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750360.JPG",
                "locality": "Anand Complex",
                "areaName": "Sector 49,Noida",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Home Food",
                    "Indian",
                    "North Indian",
                    "Thalis"
                ],
                "avgRating": 4.3,
                "parentId": "444382",
                "avgRatingString": "4.3",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 3.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-25 mins",
                    "lastMileTravelString": "3.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-29 02:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "description": "",
                                        "shortDescription": "options available",
                                        "fontColor": "#7E808C"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹139"
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
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=750360",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "590722",
                "name": "Goli Vada Pav No.1",
                "cloudinaryImageId": "kaxidir73pury7xhuriz",
                "locality": "Assotech Business Cressterra",
                "areaName": "Sector 135",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Maharashtrian",
                    "Snacks",
                    "Fast Food"
                ],
                "avgRating": 4.3,
                "veg": true,
                "parentId": "3998",
                "avgRatingString": "4.3",
                "totalRatingsString": "1K+",
                "promoted": true,
                "adTrackingId": "cid=17646121~p=3~adgrpid=17646121#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=590722~eid=c65e4f26-4bfa-4860-a0d9-57b5998124dd~srvts=1724864726925~collid=45995",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 6.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "6.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-28 23:59:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textExtendedBadges": {

                        },
                        "textBased": {

                        },
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹75"
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
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=590722",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "622165",
                "name": "MOJO Pizza - 2X Toppings",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/1c21e4ed-37c9-45b2-9788-1fee96413482_622165.JPG",
                "locality": "Sector 49",
                "areaName": "Gautam Buddha Nagar",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Fast Food",
                    "Desserts"
                ],
                "avgRating": 4.3,
                "parentId": "11329",
                "avgRatingString": "4.3",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 3.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-30 mins",
                    "lastMileTravelString": "3.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-29 02:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
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
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "description": "",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
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
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=622165",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "138993",
                "name": "Bikkgane Biryani",
                "cloudinaryImageId": "56646c3f698b3c5ae53639c49a4725af",
                "locality": "Hazipur",
                "areaName": "Hajipur",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Biryani",
                    "Hyderabadi",
                    "Andhra",
                    "South Indian",
                    "North Indian",
                    "Mughlai",
                    "Kebabs"
                ],
                "avgRating": 4.3,
                "parentId": "5070",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 28,
                    "lastMileTravel": 4.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-29 02:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Biryani.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textBased": {

                        },
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "imageId": "Rxawards/_CATEGORY-Biryani.png",
                                        "description": "Delivery!"
                                    }
                                }
                            ]
                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
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
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=138993",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "574262",
                "name": "California Burrito",
                "cloudinaryImageId": "tg61d1oklma3204j3gqd",
                "locality": "Sector 98",
                "areaName": "Sector 98",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Mexican",
                    "American",
                    "Salads",
                    "Continental",
                    "Keto",
                    "Healthy Food",
                    "Beverages",
                    "Snacks",
                    "Desserts",
                    "Fast Food"
                ],
                "avgRating": 4.6,
                "parentId": "1252",
                "avgRatingString": "4.6",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 4.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-29 01:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
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
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "description": "",
                                        "shortDescription": "options available",
                                        "fontColor": "#7E808C"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
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
                        "rating": "4.6",
                        "ratingCount": "100+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=574262",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        }
    ],
}



const Body = () => {
    return (
        <div className="body">
            <div className='search'>
                Search
            </div>
            <div className='res-container'>
                <RestaurantCard resData={resList.restaurants[0]} />
                <RestaurantCard resData={resList.restaurants[1]} />
                <RestaurantCard resData={resList.restaurants[2]} />
                <RestaurantCard resData={resList.restaurants[3]} />
                <RestaurantCard resData={resList.restaurants[4]} />
                <RestaurantCard resData={resList.restaurants[5]} />
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