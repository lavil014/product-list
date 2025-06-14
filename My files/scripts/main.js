const incrementImgsrc = '/assets/images/icon-increment-quantity.svg';
const decrementImgsrc = '/assets/images/icon-decrement-quantity.svg'


 export const renderSpanactive = (name)=>{
  return `
  
    <span class ='shopping-cart-active' data-name="${name}">
      <img class="span-btn decrement-counter" src="${decrementImgsrc}" alt="">
      <p class='product-counter'>1</p>
      <img class="span-btn increment-counter" src="${incrementImgsrc}" alt="">
    </span> 
  
  `
}

export const handleProductcounter = (e)=>{

  if(e.target.matches('.shopping-cart-active .span-btn')){
    

    const span = e.target.closest('.shopping-cart-active');
    const counter = span.querySelector('p');


    let quantity = parseInt(counter.textContent);



    const decrement = e.target.matches('.decrement-counter');
    const increment = e.target.matches('.increment-counter');

    if(increment){
      quantity ++;
    } else if (decrement && quantity > 1){
      quantity --; 
    }

     counter.textContent = quantity;

  }


  const mycustomEvent = new CustomEvent('updateProductquantity', {
    detail: {
      name : name,
      quantity : quantity,
      price : price
    }
  })

  document.dispatchEvent(mycustomEvent);

}



