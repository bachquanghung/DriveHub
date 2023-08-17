import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.js";
import Blog from "./pages/Blog/Blog.js";
import Shop from "./pages/Shop/Shop.js";
import Contact from "./pages/Contact/Contact.js";
import Services from "./pages/Services/Services.js";
import Layout from "./layout/Layout.js";
import ProductDetail from "./pages/Shop/ProductDetail.js";
import Login from "./offpage/Login/Login.js";
import ChangePassword from './offpage/ChangePassword/ChangePassword.js'
import { useState,createContext } from "react";
import Checkout from "./pages/Checkout/Checkout.js";

export const themeContext=createContext()
function App() {
  
  const publics = [
    {
      path: "/",
      pages: Home,
    },
    {
      path: "/blog",
      pages: Blog,
    },
    {
      path: "/shop",
      pages: Shop,
    },
    {
      path: "/contact",
      pages: Contact,
    },
    {
      path: "/checkout",
      pages: Checkout,
    },
  ];

  const [theme,setTheme]=useState('')

  const toggleTheme=()=>{
    setTheme(theme==='dark'?'':'dark')
    console.log('confirmed')
  }
  const value={
    theme,
    toggleTheme
  }
  return (
    <themeContext.Provider value={value}>
    <div className="App">
      <Routes>
        {publics.map((pub, index) => {
          const Page = pub.pages;
          return (
            <Route
              key={index}
              path={pub.path}
              element={
                <Layout>
                  <Page></Page>
                </Layout>
              }
            ></Route>
          );
        })}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register'></Route>
        <Route path='/product/:id' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/change-password' element={<ChangePassword></ChangePassword>}></Route>
      </Routes>
    </div>
    </themeContext.Provider>
  );
}

export default App;
