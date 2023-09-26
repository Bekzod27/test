import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Basket from "../pages/Basket";
import Products from "../pages/Products";


export const router= createBrowserRouter([
{
element:<Layout/>,
children:[
{
    path:'/',
    element:<Basket/>
},
{
    path:'/products',
    element:<Products/>
},
]}
])