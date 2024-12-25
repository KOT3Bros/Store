const productsBox = document.querySelector('.cart-left__products');
const buttonsBox = document.querySelector('.cart-left__buttons');
const products = productsBox.querySelectorAll('.cart-product');
const removeButtons = productsBox.querySelectorAll('.cart-product__button')
const clearButton = document.querySelector('.cart-left__button');

const emptyCart = () => {
    if (productsBox.children.length === 0) {
        const emptyCart = document.createElement('h1');
        emptyCart.classList.add('cart-left__text')
        emptyCart.textContent = 'THE CART IS STILL EMPTY'
        productsBox.appendChild(emptyCart)

        productsBox.classList.add('cart-left__products_empty')
        buttonsBox.classList.add('cart-left__buttons_empty')
        clearButton.remove()
    }
}

productsBox.addEventListener('click', emptyCart)

removeButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        productsBox.removeChild(button.parentElement)
    });
});

clearButton.addEventListener('click', function (e) {
    products.forEach(product => {
       product.remove() 
    });
    emptyCart()
});