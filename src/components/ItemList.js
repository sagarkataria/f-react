import { FaStar } from "react-icons/fa";
import { CDN_URL } from "../utils/constant";
const ItemList = ({ data }) => {

    return (
        <div>
            {data.map((item) => (

                <div key={item.card.info.id} className='p-2 m-2 border-b-2 flex justify-between'>
                    <div className="w-9/12">
                        <div>
                            <div className="font-bold">{item.card.info.name}</div>
                            <div>₹ {item.card.info.defaultPrice / 100 || item.card.info.price / 100} </div>
                            <div className="flex items-center mt-2">
                                <FaStar className="text-green-700 mr-2" size={12} />
                                <h4 className="text-sm">{item?.card?.info?.rating?.
                                    aggregatedRating?.rating}</h4>
                            </div>
                            <p className="text-gray-700 mt-3">{item.card.info.description}</p>
                        </div>
                    </div>
                    <div className="w-3/12">
                        <div className="relative">
                            <img src={CDN_URL + item.card.info?.imageId} alt="Image" className=" w-full h-[120px] object-cover" />
                            <button className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 bg-white text-black py-2 px-4 rounded-lg shadow-lg">
                                +Add
                            </button>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default ItemList