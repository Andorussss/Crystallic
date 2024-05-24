
const cart = [];
const cartList = document.querySelector(".cart ul");
const total = document.querySelector(".total");

document.querySelectorAll(".addBtn").forEach((button, index) => {
    button.addEventListener("click", () => {
        const productTitle = document.querySelectorAll(".product h2")[index].textContent;
        const productPrice = document.querySelectorAll(".product .price")[index].textContent;
        const productItem = {
            title: productTitle,
            price: parseFloat(productPrice.replace("$", ""))
        };

        cart.push(productItem);
        updateCart();
    });
});

function updateCart() {
    cartList.innerHTML = "";
    let cartTotal = 0;

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div>${item.title}</div>
            <div>$${item.price.toFixed(2)}</div>
        `;
        cartList.appendChild(listItem);

        cartTotal += item.price;
    });

    total.textContent = `Итого: $${cartTotal.toFixed(2)}`;
}

document.querySelector(".checkout").addEventListener("click", () => {
    if (cart.length > 0) {
        alert("Заказ успешно оформлен!");
        cart.length = 0;
        updateCart();
    } else {
        alert("Корзина пуста. Добавьте товары перед оформлением заказа.");
    }
});

