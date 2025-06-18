
const shoppingCartsrc = '/assets/images/icon-add-to-cart.svg'; 
const incrementImgsrc = '/assets/images/icon-increment-quantity.svg';
const decrementImgsrc = '/assets/images/icon-decrement-quantity.svg';
const emptyCardilustration = '/assets/images/illustration-empty-cart.svg'
const cartSection = document.getElementById ('cart-section');


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
      <p class='product-counter'>1</p>
      <img class="span-btn increment-counter" src="${incrementImgsrc}" alt="">
    </span> 
  
  `
}

export const renderCart = ()=>{
  return cartSection.innerHTML = `
  <p class="header">Your Cart (0)</p>
      <div class="items-section">
        <img src="${emptyCardilustration}" alt="Empty card image">
        <p>Your added items will appear here</p>
      </div> 
  `
}