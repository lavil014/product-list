
const displayOrdersection = document.getElementById('display-order-section');
const productsSection = document.getElementById('products-main');



import { renderSpanactive,updateCartcount} from "./renders.js";

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


      /* This code display the order section on the UI*/ 
      displayOrdersection.style.display = 'flex';
      productsSection.style.opacity = 0.3;
      

  })

}

export const startnewOrder = ()=>{
  
  const startnewOrderbtn = document.getElementById('start-new-order');

  startnewOrderbtn.addEventListener('click', ()=>{
    
    window.location.reload();

  })

}