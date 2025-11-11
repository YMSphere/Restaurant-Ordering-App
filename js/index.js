
import menuArray from './data.js'

let orderArr = [] 
let prices =[]
let just = ""
let name =''

document.addEventListener('click', (e) => {
    if(e.target.id === "add-btn"){
        item(e.target.dataset.menuItem)
    } else if(e.target.id === "remove-btn") {
        console.log(e.target.dataset)
        removeBtn(e.target.dataset.itemId)
    }
})

function orderHtml() {
    return `
    <div class="order-section" id="order-section">
    <h2 class="order-heading">Your Order:</h2>
    <div id="container"></div>
    <button class="complet-order-btn" id="complet-order-btn">Complete order</button>
    </div>
    `
}

function price(itemPrice) {
    prices.push(itemPrice)
    return prices.reduce((totalPrice, currentPrice) => totalPrice + currentPrice)
}  

function removeBtn(itemId) {
    console.log(orderArr.pop(itemId))
    console.log(prices.pop(itemId))
    
    if (orderArr.length < 1) {
        document.getElementById("order-section").style.display = "none"
    } else {
        console.log(document.getElementById(itemId).style.display = "none")
    }
}


function item(itemId) {
    
    menuArray.forEach(function(item){
        if(Number(itemId) === item.id){
            orderArr.push(item)
            name =  orderArr.map(function(item) {
                
                return `
                <div class="order-item-container" id="${item.id}">
                <ul class="ul-order-items" id="ul-order-items">
                <li class="order-name">${item.name}</li>
                </ul>
                <p class="amount" id="amount"></p>
                <button class="remove-btn" id="remove-btn" data-item-id="${item.id}">remove</button>
                <p class="order-price">$${item.price}</p>
                </div>
                `
                
            }).join('')
            console.log(name)
            
            price(item.price)
        }
    })
    
    
    const totalPrice = `
    <div class="total-price-container">
    <h3 class="order-total-text">Total price:</h3>
    <p class="order-total-price">$${price}</p>
    </div>`
    console.log(orderArr)
    
    
    // menuArray.map(function(item) {
        //     orderArr.forEach(function(id) {
            //         if (item.id === id) {
                
            //             name += `
            //             <div class="order-item-container" id="order-item-container">
            //             <ul class="ul-order-items" id="name-id">
            //             <li class="order-name">${item.name}  ${numberName++}</li>
            //             </ul>
            //             <button class="remove-btn" id="remove-btn" data-item-id="order-item-container">remove</button>
            //             <p class="order-price">$${item.price}</p>
            //             </div>
            //             `
            
            
            
            //         } else if(item.id === id) {
                //             `
                //             <div class="order-item-container" id="order-item-container">
                //             <ul class="ul-order-items" id="name-id">
                //             <li class="order-name">${item.name}</li>
                //             </ul>
                //             <button class="remove-btn" id="remove-btn" data-item-id="order-item-container">remove</button>
                //             <p class="order-price">$${item.price}</p>
                //             </div>
                //             `
                //         }
                
                //         console.log(name)
                //     })
                document.getElementById("your-order").innerHTML = orderHtml()
                document.getElementById("container").innerHTML = name + totalPrice
            }
            
            
            
            // function item(itemId) {
                //     let name
                //      menuArray.forEach(item => { 
                    //         if (item.id === Number(itemId)) {
                        //             console.log(item.name)
                        //             return name = `
                        //             <section>
                        //                 <h2>Your Order:<h2>
                        //                 <p>${item.name}</p>
                        //             <section>
                        //             `
                        //         }
                        //     })
                        //     document.getElementById("your-order").innerHTML += name
                        // }
                        
function getRenderHtml() {
    return menuArray.map(item => {
        return `
        <div class="item-container" ${item.id}>
            <p class="emoji">${item.emoji}</p>
            <ul class="ul-items">
                <li class="name">${item.name}</li>
                <li class="ingredients">${item.ingredients.join(", ")}</li>
                <li class="price">$${item.price}</li>
            </ul>
            <button class="add-btn" id="add-btn" data-menu-item="${item.id}">+</button>
        </div>
        `
    }).join("")
}
                        
                        
function render () {
    document.getElementById("menu-items").innerHTML = getRenderHtml()
}

render()