const cardContainer = document.getElementById('card-container');


const fetchData  = async () => {
  try{
    const response = await fetch('/data.json');


    let productData = await response.json();
    
    console.log(productData);

 
    productData.map((product)=>{
      
      cardContainer.innerHTML += `
        <div class="card">
          <div class="image-container">
            <img src="${product.image.mobile}" alt="product-image">
            <span>
              <img src="/Chllenge files/assets/images/icon-add-to-cart.svg" alt=""><p>Add to Cart</p>
            </span> 
          </div>
          <div class="product-information">
            <p class="header">${product.category}</p>
            <p class="product-description">${product.name}</p>
            <p class="product-price">$ ${product.price}</p>
          </div>
        </div>
      `;
    })
    
  }
  catch(error){
    console.error(error)
  }
}

fetchData();



