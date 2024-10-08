import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js';
import Body from './components/Body.js';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About.js';
import ContactUs from './components/ContactUs.js';
import Error from './components/Error.js';
import RestaurantMenu from './components/RestaurantMenu.js';
import UserContext from './utils/UserContext.js';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import Cart from './components/Cart.js';


// Chunking
// Code Splitting
// Dynamic Bundling
// lazy loading
// on demand loading
// dynamic import

const Grocery = lazy(() => import('./components/Grocery'))
const About = lazy(() => import('./components/About'))



const AppLayout = () => {
    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            name: "Sagar Singh",
        }
        setUserName(data.name)
    }, [])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName }}>
                <div className='app'>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: (<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>)
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>)
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);