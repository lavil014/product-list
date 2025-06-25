
const shoppingCartsrc = '/assets/images/icon-add-to-cart.svg'; 
const incrementImgsrc = '/assets/images/icon-increment-quantity.svg';
const decrementImgsrc = '/assets/images/icon-decrement-quantity.svg';
const emptyCardilustration = '/assets/images/illustration-empty-cart.svg'
const cartSection = document.getElementById ('cart-section');
const cartCount = document.getElementById('cart-count');



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
  cartSection.innerHTML = `
  <p class="header">Your Cart (0)</p>
      <div class="items-section">
        <img src="${emptyCardilustration}" alt="Empty card image">
        <p>Your added items will appear here</p>
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

    const removebtn = productItem.querySelector('#remove-product');


  }

  
  console.log(removebtn)

  const updatedCartcount = productList.childElementCount;

  cartCount.textContent = `(${updatedCartcount})`;

}









