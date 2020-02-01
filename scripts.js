"use strict";

const togglePricing = (element, amount) => {
    if (element.classList.contains('monthly')) {
        element.classList.remove('monthly');
        element.classList.add('yearly');
        element.textContent = `${amount[1]}`;
    } else if (element.classList.contains('yearly')) {
        element.textContent = `${amount[0]}`;
        element.classList.remove('yearly');
        element.classList.add('monthly');
    } 
} 

const changePricing = () => {
    const basicPrices = ['19.99', '199.99'];
    const proPrices = ['24.99', '249.99'];
    const masterPrices = ['39.99', '399.99'];
    const basicPricing = document.getElementById('basicPricing');
    const proPricing = document.getElementById('proPricing');
    const masterPricing = document.getElementById('masterPricing');
    togglePricing(basicPricing, basicPrices);
    togglePricing(proPricing, proPrices);
    togglePricing(masterPricing, masterPrices);
}

const toggleTest = document.getElementById('toggle');
toggleTest.addEventListener("click", changePricing);