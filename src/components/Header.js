import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
const Header = () => {
    const [btnLogin, setBtnLogin] = useState('Login');
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext)

    // subcribing the store using Selector
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);
    return (
        <div className='header flex justify-between border-solid-100'>
            <div>
                <img className='w-12' src={LOGO_URL} alt="logo" />
            </div>
            <div className='flex'>
                <ul className="flex mr-5">
                    <li className="p-3">
                        Online Status : {onlineStatus ? '🟢' : '🔴'}
                    </li>
                    <li className="p-3">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-3">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="p-3">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="p-3">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="p-3 font-bold">
                        <Link to="/cart" >Cart({cartItems.length})</Link>
                    </li>
                    <li className="p-3">
                        <button
                            className="login"
                            onClick={() => {
                                btnLogin === 'Login' ? setBtnLogin('Logout') : setBtnLogin('Login')
                            }}
                        >
                            {btnLogin}
                        </button>
                    </li>
                    <li className="p-3 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;