
const shoppingCartsrc = '/assets/images/icon-add-to-cart.svg'; 
const incrementImgsrc = '/assets/images/icon-increment-quantity.svg';
const decrementImgsrc = '/assets/images/icon-decrement-quantity.svg';
const emptyCardilustration = '/assets/images/illustration-empty-cart.svg'
const cartInformation = document.getElementById ('cart-information');
const cartCount = document.getElementById('cart-count');
const productList = document.getElementById('product-list');



import { removeCartItem } from "./handlers.js";


export const renderCards = (image, category, name , price)=>{
    return `
      <div class="card">
        <div class="image-container">
          <img src="${image}" alt="product-image">
          <span class ='shopping-cart-span' data-name="${name}">
              <img src="${shoppingCartsrc}" alt="${name}"><p>Add to Cart</p>
          </span> 
        </div>
          <div class="product-information">
            <p class="header">${category}</p>
            <p class="product-description">${name}</p>
            <p class="product-price">$ ${price}</p>
          </div>
        </div>
    `
}

export const renderSpanactive = (name)=>{
  return `

    <span class ='shopping-cart-active' data-name="${name}">
      <img class="span-btn decrement-counter" src="${decrementImgsrc}" alt="">
      <p class='product-counter'>0</p>
      <img class="span-btn increment-counter" src="${incrementImgsrc}" alt="">
    </span> 
  
  `
}

export const renderCart = ()=>{
  cartInformation.innerHTML = `
     <ul id = "product-list"> </ul>
      <div class="items-section">
       
        <img id = "empty-card-ilustration" src="${emptyCardilustration}" alt="Empty card image">
        <p id ="card-ilustration-header">Your added items will appear here</p>
      </div> 
  `

}

export const renderProductlist = (productDescription,quantity,price,total)=>{
  
  const productList = document.getElementById('product-list');


  const existingProduct = productList.querySelector(`li[data-name="${productDescription}"]`)

  if(existingProduct){
    const quantitySpan = existingProduct.querySelector('.product-quantity');
    const priceSpan = existingProduct.querySelector('.product-price');
    const totalSpan = existingProduct.querySelector('.product-total');



    quantitySpan.textContent = quantity;
    priceSpan.textContent = price;
    totalSpan.textContent = total;


  }else{
    const productItem = 
    `
      <li data-name="${productDescription}">
        <div>
            <div class="ordered-product-container">
              <p>${productDescription}</p>
                <div class="product-info-container">
                  <span class ="product-quantity">${quantity}</span> 
                  <span class ="product-price">${price}</span> 
                  <span class ="product-total">${total}</span>
                </div>  
            </div>
            <img id ="remove-product" class="remove-icon" src="/assets/images/icon-remove-item.svg" alt="">
        </div>
      </li>
    `;

    productList.insertAdjacentHTML('beforeend', productItem);

    
    // Desde aca deberia partir mi funcion de manejar el evento del click para borrar el item

    let removebtns = document.querySelectorAll('.remove-icon');


    removebtns.forEach((btn)=>{
      btn.addEventListener('click', (e)=>{
       
        const cartItem = e.target.closest('li');

        cartItem.remove();

      })

      

    })
  }

   const updatedCartcount = productList.childElementCount;
   cartCount.textContent = `(${updatedCartcount})`; 
      
  /*Code used to update UI to show and hide empty cart ilustrtation */

    if(updatedCartcount > 0){
      const emptyCardImage = document.getElementById('empty-card-ilustration');
      const cardIlustrtationheader = document.getElementById('card-ilustration-header');
  

      emptyCardImage.style.display = 'none';
      cardIlustrtationheader.style.display = 'none';
    } else{
      emptyCardImage.style.display = 'flex';
      cardIlustrtationheader.style.display = 'flex';
    }

}











