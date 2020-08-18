//The buy button does not currently function.

var arrShoppingCart = [];

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
                                        <th scope="col" class="shpCrtBuy">Buy Item</th>
                                        <th scope="col" class="shpCrtDelete">Remove Item</th>
                                    </tr>
                                </thead>
                                <tbody>
                        `;
        shoppingCartResult.forEach(item => {
            let tempName = 
                `
                    <tr class="table-secondary">
                        <td>${item.name}</td>
                        <td>${item.cost_quantity} ${item.cost_unit}</td>
                        <td><button class="js-add btn btn btn-success shpCrtBuyBtn" type="button">Buy</button></td>
                        <td><button class="js-add btn btn btn-danger shpCrtDeleteBtn" onclick="deleteFromShoppingCart(${item.id},'${item.name}', ${item.cost_quantity}, '${item.cost_unit}')" type="button">Remove <i class="fa fa-trash-o"></button></td>
                    </tr>
                `;
            equipmentInCartHTMLString += tempName;
        });
         let nameTemp = "</tbody></table>";
        equipmentInCartHTMLString += nameTemp;
        cartInventory.innerHTML = equipmentInCartHTMLString;
    });


//Function to delete an item from the shopping cart 
function deleteFromShoppingCart(id, name, cost_quantity, cost_unit) {
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