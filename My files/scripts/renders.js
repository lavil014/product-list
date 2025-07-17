
const shoppingCartsrc = '/assets/images/icon-add-to-cart.svg'; 
const incrementImgsrc = '/assets/images/icon-increment-quantity.svg';
const decrementImgsrc = '/assets/images/icon-decrement-quantity.svg';
const emptyCardilustration = '/assets/images/illustration-empty-cart.svg'
const cartInformation = document.getElementById ('cart-information');
const cartCount = document.getElementById('cart-count');
const displayOrdersection = document.getElementById('display-order-section');



import { removeCartitems, submitOrder, startnewOrder } from "./handlers.js";


export const renderCards = (image, category, name , price)=>{



    return `
      <div class="card">
        <div class="image-container">
          <img class="image-item" src="${image}" alt="product-image">
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
      <div class="total-container" id="total-container">

      </div>
  `
}

export const addTotals = (totals)=>{
    let totalAmount = 0;

    totals.forEach((total)=>{
    
    let itemTotal = total.textContent;

    let totaltoInt = parseFloat(itemTotal);
    
    totalAmount += totaltoInt;

  })

  return totalAmount;

}

export const rendertotalContainer = (updatedCartcount)=>{

 const totalContainer = document.getElementById('total-container');

  if(updatedCartcount>0){

    const totals = document.querySelectorAll('.product-total');

    const totalAmount = addTotals(totals)
    
      totalContainer.innerHTML = `
      <div class="total-container">
        <span><p class="order-total">Order Total</p><p class="total-amount" id="total-amount">${totalAmount}</p></span>
        <div class="carbon-neutral-container">
          <img class="carbon-neutral" src="/assets/images/icon-carbon-neutral.svg" alt="carbon-neutral-icon">
          <p>This is a carbon-neutral delivery</p>
        </div>
        <button type="submit" id="submit-btn">Confirm Order</button>
      </div>
    `
    submitOrder()

  } else if(updatedCartcount <=0){
       totalContainer.innerHTML = ``;
  }


}

export const updateCartcount = ()=>{

    const productList = document.getElementById('product-list');


    const updatedCartcount = productList.childElementCount;
    cartCount.textContent = `(${updatedCartcount})`; 
    const emptyCardImage = document.getElementById('empty-card-ilustration');
    const cardIlustrtationheader = document.getElementById('card-ilustration-header');
   
  /* Code used to update UI to show and hide empty cart ilustrtation */

    if(updatedCartcount > 0){
      emptyCardImage.style.display = 'none';
      cardIlustrtationheader.style.display = 'none';
      rendertotalContainer(updatedCartcount);
    } else{
      emptyCardImage.style.display = 'flex';
      cardIlustrtationheader.style.display = 'flex';
      rendertotalContainer(updatedCartcount);
    }
}

const captureItemsinfo = ()=>{
    
   const items = document.querySelectorAll('.items');
    
    const itemInfotodisplay = [];


    items.forEach((item)=>{
      const name = item.querySelector('.productDescription').textContent;
      const quantity = item.querySelector('.product-quantity').textContent;
      const price = item.querySelector('.product-price').textContent;
      const total = item.querySelector('.product-total').textContent;
      const productImage = item.getAttribute('data-image');

      itemInfotodisplay.push({name, productImage, quantity,price,total});
    })

    return itemInfotodisplay;

}

export const displayOrder = ()=>{
 
  const datatoDisplay = captureItemsinfo();

  let orderTotal = datatoDisplay.reduce((acc, item )=>{
    return acc + parseFloat(item.total);
  }, 0);

  

  const gettingDatatoDisplay = ()=>{

    let itemsHTML = '';

    datatoDisplay.forEach((data)=>{
    
    const {name,quantity, price, productImage, total} = data;

    itemsHTML += `<li>
            <div class="item-description">
              <img src="${productImage}" alt="ordered-item-picture">
              <div class="item-details">
                <p class="item-name">${name}</p>
                <span>
                  <p>${quantity}x</p>
                  <p>@$${price}</p>
                </span>
              </div>
            </div>
            <p class="ordered-item-total">$${total}</p>
          </li>`
  });

    return itemsHTML;

  }
  
  

const newUlitems = gettingDatatoDisplay();
const totals = document.querySelectorAll('.product-total');

const totalAmount = orderTotal.toFixed(2);

 displayOrdersection.innerHTML = `
  
  <section class="display-order-section">
      <div class="oder-header-section">
        <img src="/assets/images/icon-order-confirmed.svg" alt="check-icon">
        <p class="main-header">Order Confirmed</p>
        <p class="user-message">We hope you enjoy your food</p>
      </div>
      <div class="odered-items-section">
        <ul>
         ${newUlitems}
        </ul>
        <div class="order-total">
          <p class="ordered-total-header">Order Total</p><p class="ordered-total-amount">$${totalAmount}</p>
        </div>
      </div>
      <button id = "start-new-order">Start New Order</button>
    </section> 
  
  ` 
}


export const renderProductlist = (productDescription,quantity,price,total, itemImage)=>{
  
  const productList = document.getElementById('product-list');
  const existingProduct = productList.querySelector(`li[data-name="${productDescription}"]`);

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
      <li class ="items" data-name="${productDescription}" data-image ="${itemImage}">
        <div>
            <div class="ordered-product-container">
              <p class="productDescription">${productDescription}</p>
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

    productList.addEventListener('click', removeCartitems);

    let totals = document.querySelectorAll('.product-total');
  }

  
  displayOrder();
  startnewOrder()
  updateCartcount();
}











