let currentVoxelStructure = null;



function createVoxelStructure(settings){


    let item = settings.item;


    let size = settings.size;



    let voxels = [];



    for(let x = 0; x < size.x; x++){


        for(let y = 0; y < size.y; y++){


            for(let z = 0; z < size.z; z++){



                voxels.push({

                    x:x,

                    y:y,

                    z:z,

                    block:item.id,

                    colour:item.colour

                });


            }


        }


    }



    currentVoxelStructure = {


        name:item.name,


        mode:settings.mode,


        size:size,


        voxels:voxels


    };



    updatePreview();



    console.log(
        "Voxel structure created:",
        currentVoxelStructure
    );

}





function updatePreview(){


    let preview =
    document.getElementById("preview");



    if(!currentVoxelStructure){

        return;

    }



    let amount =
    currentVoxelStructure.voxels.length;



    preview.innerHTML = `

    🧊

    <br>

    ${currentVoxelStructure.name}

    <br>

    ${amount} blocks

    `;


}





function getVoxelStructure(){


    return currentVoxelStructure;


}
