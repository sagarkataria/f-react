import { CDN_URL } from "../utilits/constant";
const Header = () => {
    return (
        <div className='header'>
            <div>
                <img className='logo' src={CDN_URL} alt="" />
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

export default Header;