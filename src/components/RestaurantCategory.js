import { FaRegArrowAltCircleUp } from "react-icons/fa";

const RestaurantCategory = ({ data }) => {
    const { title,itemCards } = data
    return (
        <div>
            <div className="flex justify-between shadow-lg p-4 bg-gray-50 mt-6">
                <span>{title} ({data.itemCards.length})</span>
                <span className=""><FaRegArrowAltCircleUp size={25} clas/></span>
            </div>
        </div>
    )
}

export default RestaurantCategory   