
"use strict";

console.log(`script loaded`);



const togglePricing = (element, amount) => {
    if (element.classList.contains('monthly')) {
        console.log(element);
        console.log('class is monthly');
        element.textContent = `${amount[0]}`;
        element.classList.remove('monthly');
        element.classList.add('yearly');
        element.textContent = `${amount[1]}`;
        return;
    } else if (basicPricing.classList.contains('yearly')) {
        console.log('id is yearly');
        console.log(element);
        element.textContent = `${amount[1]}`;
        element.classList.remove('yearly');
        element.classList.add('monthly');
        element.textContent = `${amount[0]}`;
        return;
    } 
} 

/* set prices in an array? switch array on click */

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