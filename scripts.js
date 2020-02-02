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
    const basicPrices = ['199.99', '19.99'];
    const proPrices = ['249.99', '24.99'];
    const masterPrices = ['399.99', '39.99'];
    const basicPricing = document.getElementById('basicPricing');
    const proPricing = document.getElementById('proPricing');
    const masterPricing = document.getElementById('masterPricing');
    togglePricing(basicPricing, basicPrices);
    togglePricing(proPricing, proPrices);
    togglePricing(masterPricing, masterPrices);
}

const pricingType = document.getElementById('billingCycle');
pricingType.addEventListener('change', changePricing);
