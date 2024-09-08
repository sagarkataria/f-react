# Namste React 

- set-up npm 
   - npm init
- Most important package in react is bundler and in this project we are using parcel bundler
  - npm install -D parcel
- Execute our react project need to install React and ReactDOM 
  - npm install react
  - npm install react-dom
- Now we can execute our react project using parcel bundler 
  - npx parcel index.html
- React Router
  - Install -> npm i react-router-dom


  #parcel
-Dev Build
~ it dev build

-Local Server
~ it create a local server

-HMR = Hot Module Replacement
~ Parcel automatically refresing page also

-File Watching Algorithm - written in c++

-Caching
~ parcel using caching thing for us so that next build faster

-Image Optimization
~ most expensive thing in web browser is to load images your page , now parcel basically if you keep images parcle will image optimization as well

-Minification
~ when you make a production build it will minified file also

-Bundling
~ it will bundling file also

-Compress
~

- Consistent Hashing
  -Error HAndling
- HTTPs
  -Tree Shaking - remove unused code

7 -> delete "main":"App.js" in composer.json
run a command -> npx parcel build index.html

8 -> now you have to tell your project that what all browser should your app to support
change in composer.json and configure "browserList"


# Redux Toolkit
  - install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch(action)
  - Selector