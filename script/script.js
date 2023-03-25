const products = [
  {
    id: 1,
    category: "shoes",
    name: " Nike Air Dunk Jumbo ",
    shrt_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha se shoes",
    img: "https://assets.superbalistcdn.co.za/798x1150/filters:quality(90):format(jpg)/3109865/original.jpg",
    price: "R980.00",
    qty: "10",
    availibility: "In Stock",
  },

  {
    id: 2,
    category: "clothing",
    name: "  Portland long sleeve shirt - rock cord  ",
    shrt_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
    img: "https://assets.superbalistcdn.co.za/798x1150/filters:quality(90):format(jpg)/3140665/original.jpg",
    price: "599.00",
    qty: "10",
    availibility: "In Stock",
  },

  {
    id: 3,
    category: "sunglasses",
    name: " Retro sunglasses - black ",
    shrt_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
    img: "https://assets.superbalistcdn.co.za/798x1150/filters:quality(90):format(jpg)/1705526/original.jpg",
    price: "R1497.00",
    qty: "10",
    availibility: "In Stock",
  },

  {
    id: 4,
    category: "accesories",
    name: " Alix handbag - silver  ",
    shrt_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
    img: "https://assets.superbalistcdn.co.za/798x1150/filters:quality(90):format(jpg)/3023237/original.jpg",
    price: "R549.00",
    qty: "10",
    availibility: "In Stock",
  },

  {
    id: 5,
    category: "shoes",
    name: " Nike Air Dunk Jumbo ",
    shrt_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha se shoes",
    img: "https://assets.superbalistcdn.co.za/798x1150/filters:quality(90):format(jpg)/3109865/original.jpg",
    price: "R980.00",
    qty: "10",
    availibility: "In Stock",
  },

  {
    id: 6,
    category: "clothing",
    name: "  Portland long sleeve shirt - rock cord  ",
    shrt_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
    img: "https://assets.superbalistcdn.co.za/798x1150/filters:quality(90):format(jpg)/3140665/original.jpg",
    price: "599.00",
    qty: "10",
    availibility: "In Stock",
  },

  {
    id: 7,
    category: "sunglasses",
    name: " Retro sunglasses - black ",
    shrt_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
    img: "https://assets.superbalistcdn.co.za/798x1150/filters:quality(90):format(jpg)/1705526/original.jpg",
    price: "R1497.00",
    qty: "10",
    availibility: "In Stock",
  },

  {
    id: 8,
    category: "accesories",
    name: " Alix handbag - silver  ",
    shrt_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
    img: "https://assets.superbalistcdn.co.za/798x1150/filters:quality(90):format(jpg)/3023237/original.jpg",
    price: "R549.00",
    qty: "10",
    availibility: "In Stock",
  },

  {
    id: 9,
    category: "sunglasses",
    name: " Retro sunglasses - black ",
    shrt_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
    img: "https://assets.superbalistcdn.co.za/798x1150/filters:quality(90):format(jpg)/1705526/original.jpg",
    price: "R1497.00",
    qty: "10",
    availibility: "In Stock",
  },

  {
    id: 8,
    category: "accesories",
    name: " Alix handbag - silver  ",
    shrt_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
    img: "https://assets.superbalistcdn.co.za/798x1150/filters:quality(90):format(jpg)/3023237/original.jpg",
    price: "R549.00",
    qty: "10",
    availibility: "In Stock",
  },
];

const img = document.getElementById("featureMain");
const title = document.querySelector(".productTitle");
const desc = document.querySelector(".shortDesc");
const price = document.querySelector(".price");
const buy = document.querySelector(".btn");

const nextBtn = document.querySelector(".nextBTN");
const prevBtn = document.querySelector(".prevBTN");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  let displayProduct = products.map(function (item) {
    return ` 
        <div id="product">
            <img src="${item.img}" alt="" id="featureMain">
            <div>
                <h4 class="productTitle">${item.name}</h4>
                <ul>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                </ul>
                <p class="shortDesc">${item.shrt_description}</p>
                 <div class="buyOption">          
                    <div class="price"><h3>${item.price}</h3></div>                
                    <button type="button" class="btn">Buy Now</button>
                </div>
            </div>
        </div>

        
        `;
  });

  nextBtn.addEventListener("click", function () {
    displayProduct++;
  });

  displayProduct = displayProduct.join("");

  content.innerHTML = displayProduct;
});

/*
function showProduct (productsingle) {
    const item =  products[productsingle];
    img.src = item.img;
    title.textContent = item.name;
    desc.textContent = item.shrt_description;
    price.textContent = item.price;
};

nextBtn.addEventListener('click', function(){
    currentItem ++ ;
    showProduct (currentItem);
});

prevBtn.addEventListener('click', function(){
    currentItem ++ ;
    showProduct (currentItem);
});
*/
