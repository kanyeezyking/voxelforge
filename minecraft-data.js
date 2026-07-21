const minecraftBlocks = [

{
name:"Grass Block",
id:"minecraft:grass_block",
icon:"🟩",
type:"block",
category:"natural",

size:{
x:16,
y:16,
z:16
},

textures:{
top:"grass_block_top",
side:"grass_block_side",
bottom:"dirt"
},

colour:"#7FB238"
},


{
name:"Stone",
id:"minecraft:stone",
icon:"⬜",
type:"block",
category:"natural",

size:{
x:16,
y:16,
z:16
},

textures:{
top:"stone",
side:"stone",
bottom:"stone"
},

colour:"#7F7F7F"
},


{
name:"Dirt",
id:"minecraft:dirt",
icon:"🟫",
type:"block",
category:"natural",

size:{
x:16,
y:16,
z:16
},

textures:{
top:"dirt",
side:"dirt",
bottom:"dirt"
},

colour:"#866043"
},


{
name:"Oak Planks",
id:"minecraft:oak_planks",
icon:"🪵",
type:"block",
category:"building",

size:{
x:16,
y:16,
z:16
},

textures:{
top:"oak_planks",
side:"oak_planks",
bottom:"oak_planks"
},

colour:"#B8874A"
},


{
name:"Oak Log",
id:"minecraft:oak_log",
icon:"🌲",
type:"block",
category:"building",

size:{
x:16,
y:16,
z:16
},

textures:{
top:"oak_log_top",
side:"oak_log",
bottom:"oak_log_top"
},

colour:"#956C42"
},


{
name:"Cobblestone",
id:"minecraft:cobblestone",
icon:"🪨",
type:"block",
category:"building",

size:{
x:16,
y:16,
z:16
},

textures:{
top:"cobblestone",
side:"cobblestone",
bottom:"cobblestone"
},

colour:"#7A7A7A"
},


{
name:"Sand",
id:"minecraft:sand",
icon:"🟨",
type:"block",
category:"natural",

size:{
x:16,
y:16,
z:16
},

textures:{
top:"sand",
side:"sand",
bottom:"sand"
},

colour:"#D8C28B"
},


{
name:"Glass",
id:"minecraft:glass",
icon:"🔳",
type:"block",
category:"building",

size:{
x:16,
y:16,
z:16
},

textures:{
top:"glass",
side:"glass",
bottom:"glass"
},

colour:"#A8E6FF"
},


{
name:"Brick Block",
id:"minecraft:bricks",
icon:"🧱",
type:"block",
category:"building",

size:{
x:16,
y:16,
z:16
},

textures:{
top:"bricks",
side:"bricks",
bottom:"bricks"
},

colour:"#A94F3F"
},


{
name:"Diamond Block",
id:"minecraft:diamond_block",
icon:"💎",
type:"block",
category:"building",

size:{
x:16,
y:16,
z:16
},

textures:{
top:"diamond_block",
side:"diamond_block",
bottom:"diamond_block"
},

colour:"#5EECD5"
},


{
name:"Gold Block",
id:"minecraft:gold_block",
icon:"🟨",
type:"block",
category:"building",

size:{
x:16,
y:16,
z:16
},

textures:{
top:"gold_block",
side:"gold_block",
bottom:"gold_block"
},

colour:"#FFD700"
},


{
name:"Iron Block",
id:"minecraft:iron_block",
icon:"⬜",
type:"block",
category:"building",

size:{
x:16,
y:16,
z:16
},

textures:{
top:"iron_block",
side:"iron_block",
bottom:"iron_block"
},

colour:"#D8D8D8"
},

{
name:"Crafting Table",
id:"minecraft:crafting_table",
icon:"🛠️",
type:"block",
category:"functional",

size:{
x:16,
y:16,
z:16
},

textures:{
top:"crafting_table_top",
side:"crafting_table_side",
bottom:"oak_planks"
},

colour:"#A8754D"
},


{
name:"Command Block",
id:"minecraft:command_block",
icon:"🟧",
type:"block",
category:"technical",

size:{
x:16,
y:16,
z:16
},

textures:{
top:"command_block",
side:"command_block",
bottom:"command_block"
},

colour:"#C77DFF"
},


{
name:"Obsidian",
id:"minecraft:obsidian",
icon:"⬛",
type:"block",
category:"building",

size:{
x:16,
y:16,
z:16
},

textures:{
top:"obsidian",
side:"obsidian",
bottom:"obsidian"
},

colour:"#24103D"
}


];





const minecraftMobs = [

{
name:"Creeper",
id:"minecraft:creeper",
icon:"👾",
type:"mob",
category:"hostile",

size:{
x:16,
y:32,
z:16
},

model:"creeper",
texture:"creeper",

colour:"#4CAF50"
},


{
name:"Zombie",
id:"minecraft:zombie",
icon:"🧟",
type:"mob",
category:"hostile",

size:{
x:16,
y:32,
z:16
},

model:"zombie",
texture:"zombie",

colour:"#4C8C4A"
},


{
name:"Skeleton",
id:"minecraft:skeleton",
icon:"💀",
type:"mob",
category:"hostile",

size:{
x:16,
y:32,
z:16
},

model:"skeleton",
texture:"skeleton",

colour:"#D8D8D8"
},


{
name:"Pig",
id:"minecraft:pig",
icon:"🐷",
type:"mob",
category:"passive",

size:{
x:16,
y:16,
z:16
},

model:"pig",
texture:"pig",

colour:"#E8A0A0"
},


{
name:"Cow",
id:"minecraft:cow",
icon:"🐮",
type:"mob",
category:"passive",

size:{
x:16,
y:24,
z:16
},

model:"cow",
texture:"cow",

colour:"#6B4F35"
},


{
name:"Villager",
id:"minecraft:villager",
icon:"🧑",
type:"mob",
category:"passive",

size:{
x:16,
y:32,
z:16
},

model:"villager",
texture:"villager",

colour:"#B07B52"
}


];





const minecraftEntities = [

{
name:"Oak Boat",
id:"minecraft:oak_boat",
icon:"🚣",
type:"entity",
category:"vehicle",

size:{
x:32,
y:16,
z:16
},

model:"oak_boat",
texture:"oak_boat",

colour:"#956C42"
},


{
name:"Minecart",
id:"minecraft:minecart",
icon:"🚋",
type:"entity",
category:"vehicle",

size:{
x:16,
y:16,
z:16
},

model:"minecart",
texture:"minecart",

colour:"#555555"
},


{
name:"Chest",
id:"minecraft:chest",
icon:"📦",
type:"entity",
category:"container",

size:{
x:16,
y:16,
z:16
},

model:"chest",
texture:"chest",

colour:"#A8754D"
},


{
name:"Item Frame",
id:"minecraft:item_frame",
icon:"🖼️",
type:"entity",
category:"decoration",

size:{
x:16,
y:16,
z:2
},

model:"item_frame",
texture:"item_frame",

colour:"#956C42"
}

];
