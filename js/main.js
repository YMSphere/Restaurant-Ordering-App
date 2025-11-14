// || IMPORTING MENU DATA

import menuArray from './data.js'

// || LISTENING FOR THE EVENTS

document.addEventListener("click", function(e) {
    if(e.target.dataset.menuItem) {
        orderedItemPriceReturn(Number(e.target.dataset.menuItem))
    } else if(e.target.id === "remove-btn") {
        removebtn(Number(e.target.dataset.removeBtn))
    } else if (e.target.id === "complete-order-btn") {
        completeOrderBtn()
    } else if(e.target.dataset.formId !== "complete-module") {
        document.getElementById("complete-module").style.display = "none"
    } 
})

document.addEventListener("submit", function(e) {
    e.preventDefault()
    orderCompletedMessage()
})

// || MENU


function menu() {
   return menuArray.map(item => `
    <section class="menu-item-container" id="${item.id}">
        <p class="emoji">${item.emoji}</p>
        <ul class="ul-list">
            <li class="name">${item.name}</li>
            <li class="ingredients">${item.ingredients.join(', ')}</li>
            <li class="price">$${item.price}</li>
        </ul>
        <button class="add-btn" data-menu-item="${item.id}">+</button>
    </section>
    `).join('')
}

// || YOUR ORDER

let orderArr = []
let prices = []

function orderedItemPriceReturn(itemId) {
    menuArray.map(item => {
        if (item.id === itemId) {
            orderArr.push(item)
            prices.push(item.price)
        }
    })
    renderOrder()
}

function yourOrder() {
    return `
    <section class="order-section" id="order-section">
    <h2 class="order-heading">Your Order</h2>
        <div id="order-container">
        
        </div>
        <div class="total-price-container" id="total-price-container">

        </div>
        <button class="complete-order-btn" id="complete-order-btn">Complete order</button>
    </section>
    `
}

function orderItemDisplay() {
    return orderArr.map((item, index) => `
    <div class="ordered-item-container" id="${index}">
        <ul class="ul-order-items" id="ul-order-items">
            <li class="order-name">${item.name}</li>
        </ul>
        <button class="remove-btn" id="remove-btn" data-remove-btn="${index}">remove</button>
        <p class="order-price">$${item.price}</p>
    </div>
    `).join('')
}

function totalPriceRender() {
    const totalPrice = prices.reduce((totalPrice, currentPrice) => totalPrice + currentPrice, 0)
    return `
        <h3 class="order-total-text">Total price:</h3>
        <p class="order-total-price">$${totalPrice}</p>
        `
}

function removebtn(containerId) {
    orderArr.splice(containerId, 1)
    prices.splice(containerId, 1)

    document.getElementById(containerId).style.display = "none"
    totalPriceRender()
    
    orderArr.length === 0 ? document.getElementById("order-section").style.display = "none" : renderOrder()
}

// || COMPLETED ORDER

function orderCompletedMessage() {
    document.getElementById("complete-module").style.display = "none"
    const custemerName = document.getElementById('fullName').value

    const message = `
    <div class="message-container">
        <p>Thanks, ${custemerName}! Your order is on its way!</p>
    </div>
    `
    
    renderCompletedMessage(message)
}

function completeOrderBtn() {
    document.getElementById("complete-module").style.display = "flex"
}

// || RENDER

function renderCompletedMessage(message) {
    document.getElementById("main").innerHTML = menu() + message
}

function renderOrder() {
    document.getElementById("main").innerHTML = menu() + yourOrder()
    document.getElementById("order-container").innerHTML = orderItemDisplay() 
    document.getElementById("total-price-container").innerHTML = totalPriceRender()
}

function render() {
    document.getElementById("main").innerHTML = menu()
}

render()