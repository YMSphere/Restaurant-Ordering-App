import menuArray from './data.js'

document.addEventListener("click", function(e) {
    if(e.target.dataset.menuItem) {
        orderedItemPriceReturn(Number(e.target.dataset.menuItem))
    } else if(e.target.id === "remove-btn") {
        removebtn(Number(e.target.dataset.removeBtn))
        //console.log(Number(e.target.dataset.removeBtn))
    }
})

function menu() {
   return menuArray.map(item => `
    <section class="item-container" id="${item.id}">
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

function removebtn(containerId) {
    // console.log(containerId)
    console.log(orderArr)
    orderArr.splice(containerId, 1)
    prices.splice(containerId, 1)
    console.log(orderArr)

    document.getElementById(containerId).style.display = "none"
    totalPriceRender()
    
    orderArr.length === 0 ? document.getElementById("order-section").style.display = "none" : renderOrder()
}

let orderArr = []
let prices = []

function orderedItemPriceReturn(itemId) {
    menuArray.map(item => {
        if (item.id === itemId) {
            orderArr.push(item)
            prices.push(item.price)
            // console.log(orderArr)
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
        <button class="complete-order-btn">Complete order</button>
    </section>
    `
}

function orderItemDisplay() {
    return orderArr.map((item, index) => `
        <div class="container" id="${index}">
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
    // console.log(totalPrice)
    return `
        <h3 class="order-total-text">Total price:</h3>
        <p class="order-total-price">$${totalPrice}</p>
        `
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