document.addEventListener("DOMContentLoaded", () => {

    let productInput = document.getElementById('productInput');
    let countInput = document.getElementById('countInput');
    let sumInput = document.getElementById('sumInput');

    let calcPrice = () => {
        let price = productInput.options[productInput.selectedIndex].getAttribute('data-price');
        let count = countInput.value;
        let sum = price * count;
        sumInput.value = sum.toFixed(2).toString() + ' €';
    };

    productInput.onchange = calcPrice;
    countInput.onchange = calcPrice;
});