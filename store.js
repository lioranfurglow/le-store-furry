let cart = [];
let total = 0;

function addToCart(name, price){
    cart.push({name, price});
    total += price;
    updateCart();
}

function updateCart(){
    const cartItems = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");

    cartItems.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - €${item.price}`;
        cartItems.appendChild(li);
    });

    totalEl.textContent = total;
}

function checkout(){
    if(cart.length === 0){
        alert("Votre panier est vide !");
    } else {
        alert("Merci pour votre achat ! Total : €" + total);
        cart = [];
        total = 0;
        updateCart();
    }
}