import { useState } from "react";
import { LOGO_URL } from "../utils/constant.js";
const Header = () => {
    const [btnLogin, setBtnLogin] = useState('Login');
    return (
        <div className='header'>
            <div>
                <img className='logo' src={LOGO_URL} alt="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
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