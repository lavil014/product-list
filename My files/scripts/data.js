const cardContainer = document.getElementById('card-container');
const shoppingCartsrc = '/assets/images/icon-add-to-cart.svg'; 
const incrementImgsrc = '/assets/images/icon-increment-quantity.svg';
const decrementImgsrc = '/assets/images/icon-decrement-quantity.svg'
let screenWidth = window.innerWidth;


const renderSpanactive = (name)=>{
  return `
  
    <span class ='shopping-cart-active' data-name="${name}">
      <img class="span-btn" src="${incrementImgsrc}" alt="">
      <p>1</p>
      <img class="span-btn" src="${decrementImgsrc}" alt="">
    </span> 
  
  `
}

const renderCards = (image, category, name , price)=>{
    return `
    
      <div class="card">
        <div class="image-container">
          <img src="${image}" alt="product-image">
          <span class ='shopping-cart-span' data-name="${name}">
              <img src="${shoppingCartsrc}" alt="${name}"><p>Add to Cart</p>
        </div>
          <div class="product-information">
            <p class="header">${category}</p>
            <p class="product-description">${name}</p>
            <p class="product-price">$ ${price}</p>
          </div>
        </div>
    `
}

const updateImagesrc = (image)=>{
    
    if( screenWidth <= 420){
      return image = image.thumbnail;
    }else if(screenWidth <= 768){
      return image = image.mobile;
    } else if (screenWidth <= 1024){
      return image = image.tablet;
    } else {
      return image = image.desktop;
    }
 }


const fetchData  = async () => {
  try{
    const response = await fetch('/data.json');


    let productData = await response.json();
    let HTMLCards = '';


    productData.forEach(product => {
      
       let {image, category, name, price} = product;   
       let selectedImage = updateImagesrc(image);
      
       HTMLCards += renderCards(selectedImage, category, name, price)

    });  

    cardContainer.innerHTML = HTMLCards;

    cardContainer.addEventListener('click', (e)=>{

      const clicked = e.target.closest('.shopping-cart-span');


      if(clicked && !e.target.closest('shopping-cart-active')){

        const productName = clicked.dataset.name;

        clicked.outerHTML = renderSpanactive();

        console.log(productName);
      }

    })
    
  }
  catch(error){
    console.error(error)
  }
}

fetchData();

