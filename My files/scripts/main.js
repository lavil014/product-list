const incrementImgsrc = '/assets/images/icon-increment-quantity.svg';
const decrementImgsrc = '/assets/images/icon-decrement-quantity.svg';
const cartCount = document.getElementById('cart-count');


import { renderProductlist } from "./renders.js";

 export const handleProductcounter = (e)=>{

  let quantity = 0;
  let productDescription = '';
  let price = 0;
  let total = 0;
  let itemImage = null;
  

  if(e.target.closest('.card')){

    const card = e.target.closest('.card');
    const productInfodiv = card.querySelector('.product-information');
    

    let priceTag = productInfodiv.querySelector('.product-price').textContent

    price = parseFloat(priceTag.replace('$', '').trim());
    productDescription = productInfodiv.querySelector('.product-description').textContent;
    ;

    const span = e.target.closest('.shopping-cart-active');    

    itemImage = card.querySelector('.image-item').getAttribute('src');

    if(span){
      const counter = span.querySelector('p');
      quantity = parseInt(counter.textContent);


      const decrement = e.target.matches('.decrement-counter');
      const increment = e.target.matches('.increment-counter');
      if (increment) {
        quantity++;
      } else if (decrement && quantity > 1) {
        quantity--;
      }

      if(quantity === 0){
      
        return
      } else{
        counter.textContent = quantity;
        total = quantity * price;
        renderProductlist(productDescription,quantity,price,total, itemImage);
      }
    } 
  }
}








