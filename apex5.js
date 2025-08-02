// Product Data
const products = [
    { name: "Laptop", price: 800, image: "https://cdn1.smartprix.com/rx-ihkVyuxbZ-w280-h280/dell-precision-5550.webp" },
    { name: "Phone", price: 500, image: "https://tse4.mm.bing.net/th/id/OIP.HxCUDuhXiUIYR73NuIvIvQHaEp?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Headphones", price: 50, image: "https://cdn.pixabay.com/photo/2023/05/27/08/20/headphones-8021022_960_720.jpg" },
    { name: "Shoes", price: 70, image: "https://tse3.mm.bing.net/th/id/OIP.LwtzYNJJIDa0QHfsHFi2jgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" }
  ];
  
  // Display Products
  if(document.getElementById('productContainer')){
    const container = document.getElementById('productContainer');
    products.forEach((p,index)=>{
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.image}" loading="lazy" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>$${p.price}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
      `;
      container.appendChild(card);
    });
  }
  
  // Cart Functions
  function addToCart(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(products[index]);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(products[index].name+" added to cart!");
  }
  
  if(document.getElementById('cartList')){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const list = document.getElementById('cartList');
    let total = 0;
    cart.forEach(p=>{
      const li = document.createElement('li');
      li.textContent = `${p.name} - $${p.price}`;
      list.appendChild(li);
      total += p.price;
    });
    document.getElementById('totalPrice').textContent = "Total: $"+total;
  }

  

