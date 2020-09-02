//The buy button does not currently function.

var arrShoppingCart = [];
//Building the table for the shopping cart 
fetch('/cart/list')
    .then(res => res.json())
    .then(shoppingCartResult => {
        console.log("Hello There o/");
        let equipmentInCartHTMLString = 
                        `
                            <table class="table table-hover" id="cartTable">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Cost</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col" class="shpCrtBuy">Buy Item</th>
                                        <th scope="col" class="shpCrtDelete">Remove Item</th>
                                    </tr>
                                </thead>
                                <tbody>
                        `;
        shoppingCartResult.forEach(item => {
            console.log(item);
            let tempName = 
                `
                    <tr class="table-secondary">
                        <td>${item.name}</td>
                        <td>${item.cost_quantity} ${item.cost_unit}</td>
                        <td><div class="quantityTd"><button class="quantityBtn" type="button" onclick="quantity_decrease(${item.id})">-</button><p class="cartQuantity" id="item-quantity-${item.id}"> ${item.quantity}</p><button type="button" class="quantityBtn" onclick="quantity_increase(${item.id})">+</button></div></td>
                        <td><button class="js-add btn btn btn-success shpCrtBuyBtn" type="button">Buy</button></td>
                        <td><button class="js-add btn btn btn-danger shpCrtDeleteBtn" onclick="deleteFromShoppingCart(${item.id})" type="button">Remove <i class="fa fa-trash-o"></button></td>
                    </tr>
                `;
            equipmentInCartHTMLString += tempName;
        });
         let nameTemp = "</tbody></table>";
        equipmentInCartHTMLString += nameTemp;
        cartInventory.innerHTML = equipmentInCartHTMLString;
    });


//Function to delete an item from the shopping cart 
function deleteFromShoppingCart(id) {
    //console.log(name);
    fetch('/cart/'+id+'/delete', {
            method: 'POST',
        })
        .then(data => {
            location.reload();
            return false;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

//update quantity in database
function updateShoppingCartItem(id, quantity){
    $(':button').prop('disabled', true);
    var data = {
        "quantity": quantity
    };
    fetch('/cart/'+id+'/quantity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
        .then(response => response.json())
        .then(data => {
            $(':button').prop('disabled', false);
        })
        .catch((error) => {
            console.error('Error:', error);
            $(':button').prop('disabled', false);
        });
}

//function to increase and decrease the quantity

function quantity_increase(id){
    var textBox = document.getElementById("item-quantity-"+id);
    textBox.textContent++;
    updateShoppingCartItem(id, textBox.textContent);
}    
function quantity_decrease(id){
    var textBox = document.getElementById("item-quantity-"+id);
    if(textBox.textContent > 1){
        textBox.textContent--;
        updateShoppingCartItem(id, textBox.textContent);
    } else {
        alert('To take quantity to zero, please use the remove button! Thanks!');
    }
} 
