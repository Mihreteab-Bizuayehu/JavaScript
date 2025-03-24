const products = [
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/i/x/-original-imagt4qptrkzwmxa.jpeg?q=70',
    name: 'realme C51',
    price: '$50',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70',
    name: 'POCO M6 Pro 5G',
    price: '$80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/8/n/-original-imagymhwtgmdr3v2.jpeg?q=70',
    name: 'SAMSUNG Galaxy F15 5G',
    price: '$60',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/3/4/-original-imahyytukhkky5ew.jpeg?q=70',
    name: 'vivo T3x 5G ',
    price: '$40',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70',
    name: 'Apple iPhone 15',
    price: '$1000',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/s/z/g04-pb130010in-motorola-original-imagy3tecryv84k7.jpeg?q=70',
    name: 'MOTOROLA G04',
    price: '$70',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/i/d/-original-imagpgx4erjqnpzx.jpeg?q=70',
    name: 'Google Pixel 7a',
    price: '$55',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/h/f/-original-imagnfqybfcdzeye.jpeg?q=70',
    name: 'OPPO A17',
    price: '$60',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/i/x/-original-imagt4qptrkzwmxa.jpeg?q=70',
    name: 'realme C51',
    price: '$50',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70',
    name: 'POCO M6 Pro 5G',
    price: '$80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/8/n/-original-imagymhwtgmdr3v2.jpeg?q=70',
    name: 'SAMSUNG Galaxy F15 5G',
    price: '$60',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/3/4/-original-imahyytukhkky5ew.jpeg?q=70',
    name: 'vivo T3x 5G ',
    price: '$40',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70',
    name: 'Apple iPhone 15',
    price: '$1000',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/s/z/g04-pb130010in-motorola-original-imagy3tecryv84k7.jpeg?q=70',
    name: 'MOTOROLA G04',
    price: '$70',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/i/d/-original-imagpgx4erjqnpzx.jpeg?q=70',
    name: 'Google Pixel 7a',
    price: '$55',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/h/f/-original-imagnfqybfcdzeye.jpeg?q=70',
    name: 'OPPO A17',
    price: '$60',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/i/d/-original-imagpgx4erjqnpzx.jpeg?q=70',
    name: 'Google Pixel 7a',
    price: '$55',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    image:
      'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/h/f/-original-imagnfqybfcdzeye.jpeg?q=70',
    name: 'OPPO A17',
    price: '$60',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
]

let container = document.querySelector(".container");

for (const item of products) {

  // Create Elements

  let product = document.createElement("div");
  product.className = "section-container";
  let photo = document.createElement("div");
  photo.className = "product-photo";
  let productDetail = document.createElement("div");
  productDetail.className = "product-detail";
  let productName = document.createElement("h2");
  let productPrice = document.createElement("h3");
  let productDesc = document.createElement("p");
  let btn = document.createElement("button");
  btn.className = "btn";
  let productImg = document.createElement("img");

  // Append the Child
  container.appendChild(product);

  product.appendChild(photo);
  product.appendChild(productDetail);

  photo.appendChild(productImg);

  productDetail.appendChild(productName);
  productDetail.appendChild(productPrice);
  productDetail.appendChild(productDesc);
  productDetail.appendChild(btn);

  productImg.src = item.image;
  productName.innerText = item.name;
  productPrice.innerText = item.price;
  productDesc.innerText = item.description;
  btn.innerText = "purchase";
  
}