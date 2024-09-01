import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js';
import Body from './components/Body.js';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './components/About.js';
import ContactUs from './components/ContactUs.js';
import Error from './components/Error.js';


const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
   {
    path : "/",
    element : <AppLayout/>,
    errorElement : <Error/>
   },
   {
    path: "about",
    element : <About/>
   },
   {
    path: "contact",
    element:<ContactUs/>
   }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);