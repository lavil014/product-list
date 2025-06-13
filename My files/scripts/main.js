let cardContainer = document.getElementById('card-container');
let screenWidth = screen.availWidth;


const fetchData  = async () => {
  try{
    const response = await fetch('/data.json');


    let productData = await response.json();
    let HTMLCards = '';

    
    productData.forEach(product => {
      let {image, category, name, price} = product;


      const updateImagesrc = ()=>{
        if(screenWidth <= 768){
          image = image.mobile;
        } else if (screenWidth <= 1024){
          image = image.tablet;
        } else {
          image = image.desktop;
        }
      }

      updateImagesrc();

      console.log(image);
    
    });  



  }
  catch(error){
    console.error(error)
  }
}

fetchData();

