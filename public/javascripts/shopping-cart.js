var arrShoppingCart = [];

fetch('/cart/list')
    .then(res => res.json())
    .then(shoppingCartResult => {
        arrShoppingCart.push(shoppingCartResult);
    })
    .then(shoppingCartResult => {
        console.log("Hello There");
        arrShoppingCart.forEach(element => {
            var displayShoppingCart = equipmentInCart => {
                var equipmentInCartHTMLString = equipmentInCart
                    .map(
                        cart =>
                        `
                            <table class="table table-hover" id="cartTable">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col"> Cost</th>
                                        <th scope="col">Remove Item</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${cart.name}</td>
                                        <td>${cart.cost_quantity} ${cart.cost_unit}</td>
                                        <td><button class="js-add btn btn btn-danger" onclick="deleteFromShoppingCart('${cart.id}'${cart.name}', ${cart.cost_quantity}, '${cart.cost_unit}')" type="button">Remove <i class="fa fa-trash-o"></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    )
                    .join("");
                cartInventory.innerHTML = equipmentInCartHTMLString;
            };
            displayShoppingCart(arrShoppingCart);
        });  
    console.log(arrShoppingCart);
    });


//Function to save the selected items to the SQL database
function saveToShoppingCart(id, name, cost_quantity, cost_unit) {
    var data = {
        "id": id,
        "name": name,
        "cost_quantity": cost_quantity,
        "cost_unit": cost_unit
    };
    console.log(name);
    fetch('/:id/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
};