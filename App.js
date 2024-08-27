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

const RestaurantCard = () => {
    return (

        <div className='res-card' style={{ backgroundColor:"#f0f0f0" }}>
        <img 
        className='res-logo'
         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/4373cf41-dc90-45b2-970a-0b16e4e3836c_570254.jpg"
          alt=""/>
          <div className=''>
            <h3>Meghana food</h3>
            <h4>Biryani ,North Indian,</h4>
          </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className='search'>
                Search
            </div>
            <div className='res-container'>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
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