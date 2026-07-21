const textureCache = {};



function loadTexture(textureName){


    return new Promise((resolve)=>{


        if(textureCache[textureName]){


            resolve(textureCache[textureName]);

            return;

        }



        let image = new Image();



        image.onload = function(){


            textureCache[textureName] = image;


            resolve(image);


        };



        image.onerror = function(){


            console.warn(
                "Texture not found:",
                textureName
            );


            resolve(null);


        };



        image.src =
        "textures/" + textureName + ".png";


    });


}







async function getBlockTexture(block){


    if(!block.textures){

        return null;

    }



    let texture =
    block.textures.side;



    return await loadTexture(texture);


}







async function preloadTextures(){


    let promises = [];



    minecraftBlocks.forEach(block=>{


        if(block.textures){


            promises.push(

                loadTexture(
                    block.textures.side
                )

            );


        }


    });



    await Promise.all(promises);



    console.log(
        "Minecraft textures loaded"
    );


}
