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

        <div className='res-card'>
            <figure class="snip1159">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample2.jpg" alt="sq-sample2" />
                <div><i class="ion-ios-download-outline"></i></div>
                <a href="#"></a>
            </figure>
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