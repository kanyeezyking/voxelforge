let currentType = "block";

let currentMode = "structure";

let selectedItem = null;



function loadItems(){

    let container = document.getElementById("items");

    container.innerHTML = "";


    let search = document
    .getElementById("search")
    .value
    .toLowerCase();



    let data = [];


    if(currentType === "block"){
        data = minecraftBlocks;
    }


    if(currentType === "mob"){
        data = minecraftMobs;
    }


    if(currentType === "entity"){
        data = minecraftEntities;
    }


    if(currentType === "all"){

        data = [
            ...minecraftBlocks,
            ...minecraftMobs,
            ...minecraftEntities
        ];

    }



    data = data.filter(item => {

        return item.name
        .toLowerCase()
        .includes(search);

    });



    data.forEach(item => {


        container.innerHTML += `

        <div class="card"
        onclick="selectItem('${item.name}', this)">


            <div class="icon">

            ${item.icon}

            </div>


            <h3>

            ${item.name}

            </h3>


            <div class="card-info">

            ${item.type}

            </div>


        </div>

        `;


    });


}





function changeType(type){

    currentType = type;

    loadItems();

}





function selectItem(name, element){


    document
    .querySelectorAll(".card")
    .forEach(card=>{

        card.classList.remove("selected");

    });



    element.classList.add("selected");



    let allItems = [

        ...minecraftBlocks,
        ...minecraftMobs,
        ...minecraftEntities

    ];



    selectedItem = allItems.find(item => {

        return item.name === name;

    });



    updateSelectedPanel();

    updateSettings();


}





function updateSelectedPanel(){


    let panel =
    document.getElementById("selected-panel");



    panel.innerHTML = `

    <h2>

    ${selectedItem.icon}

    ${selectedItem.name}

    </h2>


    <p>

    Type:
    ${selectedItem.type}

    </p>


    <p>

    Category:
    ${selectedItem.category}

    </p>


    <p>

    Size:
    ${selectedItem.size.x}
    ×
    ${selectedItem.size.y}
    ×
    ${selectedItem.size.z}

    </p>

    `;


}





function updateSettings(){


    if(!selectedItem){
        return;
    }


    let x =
    document.getElementById("size-x");


    let y =
    document.getElementById("size-y");


    let z =
    document.getElementById("size-z");



    x.value = selectedItem.size.x;

    y.value = selectedItem.size.y;

    z.value = selectedItem.size.z;



}





function setMode(mode){


    currentMode = mode;



    document
    .querySelectorAll(".mode-buttons button")
    .forEach(button=>{

        button.classList.remove("active");

    });



    let buttons =
    document.querySelectorAll(".mode-buttons button");



    if(mode==="structure"){
        buttons[0].classList.add("active");
    }


    if(mode==="blueprint"){
        buttons[1].classList.add("active");
    }


    if(mode==="image"){
        buttons[2].classList.add("active");
    }



}





document
.getElementById("scale")
.addEventListener("change", function(){


    if(!selectedItem){
        return;
    }



    let multiplier =
    Number(this.value);



    document.getElementById("size-x").value =
    selectedItem.size.x * multiplier;



    document.getElementById("size-y").value =
    selectedItem.size.y * multiplier;



    document.getElementById("size-z").value =
    selectedItem.size.z * multiplier;



});







function generateStructure(){


    if(!selectedItem){

        alert(
        "Please select a Minecraft object first."
        );

        return;

    }



    let settings = {


        item:selectedItem,


        mode:currentMode,


        size:{


            x:Number(
            document.getElementById("size-x").value
            ),


            y:Number(
            document.getElementById("size-y").value
            ),


            z:Number(
            document.getElementById("size-z").value
            )

        }


    };



    console.log(
    "Generating:",
    settings
    );



    if(typeof createVoxelStructure === "function"){

        createVoxelStructure(settings);

    }



    document
    .getElementById("generation-status")
    .innerHTML =
    "Structure generated!";



}







function exportStructure(){


    if(typeof exportNBT === "function"){

        exportNBT();

    }

    else{

        alert(
        "NBT exporter not connected yet."
        );

    }


}





loadItems();
