const cardContainer = document.getElementById('card-container');
const shoppingCartsrc = '/assets/images/icon-add-to-cart.svg'; 
let screenWidth = screen.availWidth;

const renderCards = (image, category, name , price)=>{
    return `
    
      <div class="card">
        <div class="image-container">
          <img src="${image}" alt="product-image">
          <span class ='shopping-cart-span'>
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
    
  }
  catch(error){
    console.error(error)
  }
}

fetchData();

