import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"
const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="w-[50%] m-auto flex justify-center mt-3">
            {/* <div className="flex justify-center"> */}
            <h1>Cart</h1>
            <div className="mt-20">
                <button
                    className="p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>

            </div>
            {/* </div> */}
            <div className="shadow-lg p-4 bg-gray-50 mt-6 block">
                <ItemList data={cartItem} />
            </div>
        </div>
    )
}

export default Cart