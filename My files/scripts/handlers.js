
import { renderSpanactive, renderProductlist } from "./renders.js";

export const increaseCounter = (e)=>{
    const clicked = e.target.closest('.shopping-cart-span');

    

    if(clicked && !e.target.closest('.shopping-cart-active')){

      const productName = clicked.dataset.name;

      clicked.outerHTML  = renderSpanactive(productName);


    }
}

export const removeCartItem = (removebtn)=>{
  

}

removeCartItem()