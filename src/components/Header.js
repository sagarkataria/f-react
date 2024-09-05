import { useState } from "react";
import { LOGO_URL } from "../utils/constant.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Header = () => {
    const [btnLogin, setBtnLogin] = useState('Login');
    const onlineStatus = useOnlineStatus();
    return (
        <div className='header'>
            <div>
                <img className='logo' src={LOGO_URL} alt="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        Online Status : {onlineStatus ? '🟢' : '🔴'}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                       <Link to="/about">About</Link>
                    </li>
                    <li>
                     <Link to="/contact">Contact us</Link> 
                    </li>
                    <li>Cart</li>
                    <li>
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