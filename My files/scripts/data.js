const cardContainer = document.getElementById('card-container');
let screenWidth = window.innerWidth;
const cartSection = document.getElementById ('cart-section');



/*  Imports from scripts folder*/ 

import { handleProductcounter } from "./main.js";
import { increaseCounter } from "./handlers.js";
import {renderCards , renderCart } from "./renders.js";




const updateImagesrc = (image)=>{
    
    if( screenWidth <= 420){
      return image = image.thumbnail;
    }else if(screenWidth <= 768){
      return image = image.mobile;
    } else if (screenWidth <= 1024){
      return image = image.tablet;
    } else {
      return image = image.desktop;
    }
 }

const fetchData  = async () => {
  try{

    const response = await fetch('/data.json');


    let productData = await response.json();
    let HTMLCards = '';


    productData.forEach(product => {
      
       let {image, category, name, price} = product;   
       let selectedImage = updateImagesrc(image);
      

       HTMLCards += renderCards(selectedImage, category, name, price)
    });  

    cardContainer.innerHTML = HTMLCards;

    renderCart()


    cardContainer.addEventListener('click', increaseCounter)
    
    cardContainer.addEventListener('click', handleProductcounter);

    
    
  }
  catch(error){
    console.error(error)
  }
}

fetchData();



