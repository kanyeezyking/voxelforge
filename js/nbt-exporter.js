function exportNBT(){


    let structure =
    getVoxelStructure();



    if(!structure){


        alert(
        "Nothing has been generated yet."
        );


        return;

    }



    let nbtData = {


        name:
        structure.name,


        size:
        structure.size,


        mode:
        structure.mode,


        blocks:
        structure.voxels.map(voxel=>{


            return {


                pos:[

                    voxel.x,

                    voxel.y,

                    voxel.z

                ],


                state:
                voxel.block


            };


        })


    };



    downloadNBT(
        nbtData
    );

}





function downloadNBT(data){


    let file =
    JSON.stringify(
        data,
        null,
        2
    );



    let blob =
    new Blob(
        [file],
        {
            type:
            "application/json"
        }
    );



    let link =
    document.createElement("a");



    link.href =
    URL.createObjectURL(blob);



    link.download =
    "voxelforge-structure.nbt";



    link.click();


}
