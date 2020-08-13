//JS for the /shop page API

var arrAllEquipment = [];
var arr = [];
var arrDesiredEquipmentUrls = [];
var arrDesiredEquipment = [
    {
        name: "Axe",
        weapon_range: "Martial Melee",
        cost: 5
        
    },
];

const baseUrl = "https://www.dnd5eapi.co";
const weaponCategoryUrl = "/api/equipment-categories/weapon"
fetch(baseUrl + weaponCategoryUrl)
    .then(res => res.json())
    .then(inventoryResult => {
        //console.log(inventoryResult.equipment);
    //Get a random 10 items from the weapon array
        arrAllEquipment = inventoryResult.equipment;
        while(arr.length < 10){
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
                    });
                });
                console.log(arrDesiredEquipment); 
    })
    .then(showEquip => {
        arrDesiredEquipment.forEach(element => {
            const displayEquipment = equipmentAvail => {
                const equipmentAvailHTMLString = equipmentAvail
                    .map(
                        equip =>
                        `
                            <div class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">${equip.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${equip.weapon_range}</h6>
                                    <p class="card-text">${equip.cost} gp.</p>
                                    <a href="#" class="card-link">Add to Cart</a>
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
    

// Function to display Equipment for sale in store

//Promise.all(arrDesiredEquipment).then(results => {
//    var equipmentAvail = results.map(data => ({
//        name: arrDesiredEquipment.name,
//        type: arrDesiredEquipment.weapon_range,
//        cost: arrDesiredEquipment.cost
//    }));
//    console.log(equipmentAvail);
//    displayEquipment(equipmentAvail);
//});


const displayEquipment = equipmentAvail => {
    const equipmentAvailHTMLString = equipmentAvail
        .map(
            equip =>
            `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${equip.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${equip.weapon_range}</h6>
                        <p class="card-text">${equip.cost} gp.</p>
                        <a href="#" class="card-link">Add to Cart</a>
                    </div>
                </div>
            `
        )
        .join("");
    shopInventory.innerHTML = equipmentAvailHTMLString;
};


//function equipmentAvailHTML(arrDesiredEquipment){
//    var equipment = '';
//    var availEquipment;
//    for (let i = 0; i < arrDesiredEquipment.length; i+= 1) {
//        availEquipment = arrDesiredEquipment[i];
//        equipment += `.card(style='width: 18rem;')><div class="card-body"><h5 class="card-title">` + arrDesiredEquipment.name + `</h5>`;
//        equipment+= `<h6 class="card-subtitle mb-2 text-muted">` + arrDesiredEquipment.category_range + `</h6>`;
//        equipment=+ `<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p><a href="#" class="card-link">Add to Cart</a></div></div>`;
//    }
//    return equipment;
//}
//print(equipmentAvailHTML(arrDesiredEquipment));






















