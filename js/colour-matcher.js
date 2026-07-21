function hexToRGB(hex){

    hex = hex.replace("#","");


    return {

        r:parseInt(hex.substring(0,2),16),

        g:parseInt(hex.substring(2,4),16),

        b:parseInt(hex.substring(4,6),16)

    };

}





function colourDistance(a,b){


    return Math.sqrt(

        Math.pow(a.r-b.r,2) +

        Math.pow(a.g-b.g,2) +

        Math.pow(a.b-b.b,2)

    );


}





function findClosestMinecraftBlock(colour){


    let target =
    hexToRGB(colour);



    let closest = null;

    let smallestDistance = Infinity;



    let blocks = minecraftBlocks;



    blocks.forEach(block=>{


        let blockColour =
        hexToRGB(block.colour);



        let distance =
        colourDistance(
            target,
            blockColour
        );



        if(distance < smallestDistance){


            smallestDistance = distance;


            closest = block;


        }



    });



    return closest;


}







function convertImageColours(imageColours){


    let converted = [];



    imageColours.forEach(colour=>{


        converted.push(

            findClosestMinecraftBlock(colour)

        );


    });



    return converted;


}
