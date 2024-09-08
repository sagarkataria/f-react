import { FaRegArrowAltCircleUp } from "react-icons/fa";
import ItemList from "./ItemList.js";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div>
            <div className="shadow-lg p-4 bg-gray-50 mt-6">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-4lg">{data.title} ({data.itemCards.length})</span>
                    <span className=""><FaRegArrowAltCircleUp size={25} clas /></span>
                </div>
                {showItems && <ItemList data={data.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory   