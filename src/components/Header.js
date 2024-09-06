import { useState } from "react";
import { LOGO_URL } from "../utils/constant.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Header = () => {
    const [btnLogin, setBtnLogin] = useState('Login');
    const onlineStatus = useOnlineStatus();
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
                    <li className="p-3">Cart</li>
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
                </ul>
            </div>
        </div>
    )
}

export default Header;