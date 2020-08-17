//JS for the /shop page API

var arrAllEquipment = [];
var arr = [];
var arrDesiredEquipmentUrls = [];
var arrDesiredEquipment = [];

//Collecting data from the API 
const baseUrl = "https://www.dnd5eapi.co";
const weaponCategoryUrl = "/api/equipment-categories/weapon"
fetch(baseUrl + weaponCategoryUrl)
    .then(res => res.json())
    .then(inventoryResult => {
        //console.log(inventoryResult.equipment);
    //Get a random 10 items from the weapon array
        arrAllEquipment = inventoryResult.equipment;
        while(arr.length < 20){
            var r = Math.floor(Math.random() * 37);
            if(arr.indexOf(r) === -1) arr.push(r);
        }
        arr.sort();
        //console.log(arr);


        arr.forEach(element => {
            arrDesiredEquipmentUrls.push(arrAllEquipment[parseInt(element)]);
        });
        //console.log(arrDesiredEquipmentUrls);
        arrDesiredEquipmentUrls.forEach(element => {
                fetch(baseUrl + element.url)
                    .then(res => res.json())
                    .then(equipmentResult => {
                            arrDesiredEquipment.push(equipmentResult);
                    })
                //Building the shop inventory to display on the shop page
                    .then(showEquip => {
                        arrDesiredEquipment.forEach(element => {
                            var displayEquipment = equipmentAvail => {
                                var equipmentAvailHTMLString = equipmentAvail
                                    .map(
                                        equip =>
                                        `
                                            <div class="card-shop" style="width: 18rem;">
                                                <div class="card-shop-body">
                                                    <h5 class="card-title">${equip.name}</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted">${equip.category_range}</h6>
                                                    <p class="card-text">${equip.cost.quantity} ${equip.cost.unit}</p>
                                                    <button class="js-add btn btn btn-success" onclick="saveToShoppingCart('${equip.name}', '${equip.category_range}', ${equip.cost.quantity}, '${equip.cost.unit}')" type="button">Add to Cart</button>
                                                </div>
                                            </div>
                                        `
                                    )
                                    .join("");
                                shopInventory.innerHTML = equipmentAvailHTMLString;
                            };
                            displayEquipment(arrDesiredEquipment);
                        });                        
                    }); 
                });
                //console.log(arrDesiredEquipment); 
    });
    
//Function to save the selected items to the SQL database
function saveToShoppingCart(name, category_range, cost_quantity, cost_unit) {
    var data = {
        "name": name,
        "category_range": category_range,
        "cost_quantity": cost_quantity,
        "cost_unit": cost_unit,
        //"quantity": 1
    };
    console.log(name);
    fetch('/cart/add', {
        method: 'POST',
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






















