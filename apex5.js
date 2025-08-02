// Product Data
const products = [
    { name: "Laptop", price: 800, image: "https://picsum.photos/id/1015/200/200" },
    { name: "Phone", price: 500, image: "https://picsum.photos/id/1011/200/200" },
    { name: "Headphones", price: 50, image: "https://picsum.photos/id/1020/200/200" },
    { name: "Shoes", price: 70, image: "https://picsum.photos/id/1025/200/200" }
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
  