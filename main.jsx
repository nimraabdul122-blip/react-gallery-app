import {StrictMode } from 'react';
import {createRoot} from "react-dom/client";
// import App from "./App";
import "./index.css";
// import Notes from "./Notes";
import GalleryApp from './Galleryapp';
// import Navbar from "./Navbar";
// import HeroSection from './HeroSection';
// import ProductCard from './ProductCard';
// import Product from './Product';



createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Notes/> */}
    <GalleryApp/>
    {/* <Form/> */}
    {/* {/* <Navbar/>} */}
    {/* {<HeroSection/> */} 
    {/* <ProductCard/> */}
    {/* <Product/> */}

  </StrictMode>
);
