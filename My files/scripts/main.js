const incrementImgsrc = '/assets/images/icon-increment-quantity.svg';
const decrementImgsrc = '/assets/images/icon-decrement-quantity.svg';

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

  let quantity = '';
  let productDescription = '';
  let price = '';
  

  if(e.target.matches('.shopping-cart-active .span-btn')){
    

    const span = e.target.closest('.shopping-cart-active');
    const counter = span.querySelector('p');

    quantity = parseInt(counter.textContent);

    const decrement = e.target.matches('.decrement-counter');
    const increment = e.target.matches('.increment-counter');

    if(increment){
      quantity ++;
    } else if (decrement && quantity > 1){
      quantity --; 
    }

     counter.textContent = quantity;

  } else if (e.target.closest('.card')){

    console.log(true)
    const productInfodiv = e.target.closest('.card .product-information');
    const tag = e.target.closest('.image-container .shopping-cart-active')

    let priceTag = productInfodiv.querySelector('.product-price').textContent;
    productDescription = productInfodiv.querySelector('.product-description').textContent;

    console.log(tag);

    price = parseFloat(priceTag.replace('$', '').trim());

    /*
    price = parseFloat(priceTag.replace('$', '').trim());
    */ 
    console.log(tag);



  }

  console.log(quantity);
  console.log(price);
  console.log(productDescription);




    /*
    Necesito una funcion para poder obtener el precio y el nombre de el producto para asi poderlos manejar con mi listener
    */

    /* Necesito corregir el error de quatity ya que el valor de la variable no esta disponible fuera del conditional if*/
       
    /*
    
    const mycustomEvent = new CustomEvent('updateProductquantity', {
        detail: {
          name : name,
          quantity : quantity,
          price : price
        }
      })

    */
}



