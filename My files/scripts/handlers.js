
import { renderSpanactive,updateCartcount } from "./renders.js";

export const increaseCounter = (e)=>{
    const clicked = e.target.closest('.shopping-cart-span');

    

    if(clicked && !e.target.closest('.shopping-cart-active')){

      const productName = clicked.dataset.name;

      clicked.outerHTML  = renderSpanactive(productName);


    }
}

export const removeCartitems = (e)=>{
      
  if(e.target.classList.contains('remove-icon')){
    const cartItem = e.target.closest('li');

    cartItem.remove();

    updateCartcount()

  }

}

export const submitOrder = ()=>{

  const submitBtn = document.getElementById('submit-btn');

  submitBtn.addEventListener('click', ()=>{
    
    console.log('Function is working')
      
  })

}