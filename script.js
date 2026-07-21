// Color palette mapping survival-obtainable solid Minecraft blocks to average RGB
// Excluded: Water, Lava, Command Blocks, Structure Blocks, Bedrock, Barrier, Light, etc.
const MINECRAFT_BLOCKS = [
  // White / Light
  { id: "minecraft:white_concrete", rgb: [207, 213, 214] },
  { id: "minecraft:snow_block", rgb: [249, 254, 254] },
  { id: "minecraft:smooth_quartz", rgb: [235, 229, 222] },
  { id: "minecraft:white_wool", rgb: [233, 236, 236] },
  
  // Grays / Black
  { id: "minecraft:light_gray_concrete", rgb: [125, 125, 115] },
  { id: "minecraft:gray_concrete", rgb: [54, 57, 61] },
  { id: "minecraft:black_concrete", rgb: [8, 10, 15] },
  { id: "minecraft:obsidian", rgb: [20, 18, 29] },
  { id: "minecraft:deepslate", rgb: [57, 57, 60] },
  
  // Reds / Pinks / Oranges
  { id: "minecraft:red_concrete", rgb: [142, 32, 32] },
  { id: "minecraft:red_wool", rgb: [160, 39, 34] },
  { id: "minecraft:red_mushroom_block", rgb: [200, 40, 40] },
  { id: "minecraft:orange_concrete", rgb: [224, 97, 0] },
  { id: "minecraft:pink_concrete", rgb: [213, 101, 142] },
  { id: "minecraft:terracotta", rgb: [152, 94, 67] },
  
  // Yellows / Greens
  { id: "minecraft:yellow_concrete", rgb: [241, 175, 21] },
  { id: "minecraft:sponge", rgb: [195, 180, 75] },
  { id: "minecraft:lime_concrete", rgb: [94, 169, 24] },
  { id: "minecraft:green_concrete", rgb: [73, 91, 36] },
  { id: "minecraft:moss_block", rgb: [89, 109, 45] },
  { id: "minecraft:melon", rgb: [111, 145, 38] },
  
  // Blues / Cyans
  { id: "minecraft:light_blue_concrete", rgb: [36, 137, 199] },
  { id: "minecraft:cyan_concrete", rgb: [21, 119, 136] },
  { id: "minecraft:blue_concrete", rgb: [44, 46, 143] },
  { id: "minecraft:lapis_block", rgb: [30, 67, 140] },
  { id: "minecraft:prismarine", rgb: [99, 156, 151] },
  
  // Purples / Browns
  { id: "minecraft:purple_concrete", rgb: [100, 31, 156] },
  { id: "minecraft:magenta_concrete", rgb: [169, 48, 159] },
  { id: "minecraft:brown_concrete", rgb: [96, 59, 31] },
  { id: "minecraft:dirt", rgb: [134, 96, 67] },
  { id: "minecraft:oak_planks", rgb: [162, 130, 78] },
  { id: "minecraft:spruce_planks", rgb: [114, 84, 48] },

  // New Blocks (Including 26.2 Update)
  { id: "minecraft:sulfur_block", rgb: [212, 195, 45] },
  { id: "minecraft:potent_sulfur", rgb: [180, 160, 30] },
  { id: "minecraft:cinnabar", rgb: [150, 42, 42] },
  { id: "minecraft:chiseled_cinnabar", rgb: [135, 38, 38] }
];

const imageInput = document.getElementById('imageInput');
const depthModeSelect = document.getElementById('depthMode');
const convertBtn = document.getElementById('convertBtn');
const downloadBtn = document.getElementById('downloadBtn');

const inputCanvas = document.getElementById('inputCanvas');
const outputCanvas = document.getElementById('outputCanvas');
const inCtx = inputCanvas.getContext('2d');
const outCtx = outputCanvas.getContext('2d');

let loadedImage = null;
let matchedBlockMatrix = [];

// Handle image upload
imageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const img = new Image();
    img.onload = () => {
      loadedImage = img;
      // Draw 16x16 input image onto canvas
      inCtx.clearRect(0, 0, 16, 16);
      inCtx.drawImage(img, 0, 0, 16, 16);
      convertBtn.disabled = false;
      downloadBtn.disabled = true;
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

// Euclidean Color Distance algorithm
function findClosestBlock(r, g, b) {
  let closestBlock = MINECRAFT_BLOCKS[0];
  let minDistance = Infinity;

  for (const block of MINECRAFT_BLOCKS) {
    const [br, bg, bb] = block.rgb;
    const distance = Math.sqrt(
      Math.pow(r - br, 2) + 
      Math.pow(g - bg, 2) + 
      Math.pow(b - bb, 2)
    );

    if (distance < minDistance) {
      minDistance = distance;
      closestBlock = block;
    }
  }
  return closestBlock;
}

// Convert 16x16 pixels to Minecraft block array
convertBtn.addEventListener('click', () => {
  if (!loadedImage) return;

  const imgData = inCtx.getImageData(0, 0, 16, 16).data;
  matchedBlockMatrix = [];
  
  outCtx.clearRect(0, 0, 16, 16);
  const outData = outCtx.createImageData(16, 16);

  for (let y = 0; y < 16; y++) {
    matchedBlockMatrix[y] = [];
    for (let x = 0; x < 16; x++) {
      const idx = (y * 16 + x) * 4;
      const r = imgData[idx];
      const g = imgData[idx + 1];
      const b = imgData[idx + 2];
      const alpha = imgData[idx + 3];

      if (alpha < 128) {
        // Transparent pixel -> empty space
        matchedBlockMatrix[y][x] = null;
        outData.data[idx + 3] = 0;
      } else {
        const matched = findClosestBlock(r, g, b);
        matchedBlockMatrix[y][x] = matched.id;

        // Draw preview
        outData.data[idx] = matched.rgb[0];
        outData.data[idx + 1] = matched.rgb[1];
        outData.data[idx + 2] = matched.rgb[2];
        outData.data[idx + 3] = 255;
      }
    }
  }

  outCtx.putImageData(outData, 0, 0);
  downloadBtn.disabled = false;
});

// Generate and Download .mcfunction file
downloadBtn.addEventListener('click', () => {
  if (matchedBlockMatrix.length === 0) return;

  const mode = depthModeSelect.value;
  let commands = ["# 16x16x16 Minecraft Block Structure Generated File"];

  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const blockId = matchedBlockMatrix[y][x];
      if (!blockId) continue;

      // In Minecraft: +X is East, +Y is UP, +Z is South
      // Invert Y so top row of image matches top row in-game
      const gameY = 15 - y;

      for (let z = 0; z < 16; z++) {
        const isHollowShell = (x === 0 || x === 15 || gameY === 0 || gameY === 15 || z === 0 || z === 15);

        if (mode === 'flat' && z !== 0) continue;
        if (mode === 'hollow' && !isHollowShell) continue;

        // Place relative to execution spot: ~x ~y ~z
        commands.push(`setblock ~${x} ~${gameY} ~${z} ${blockId}`);
      }
    }
  }

  const fileContent = commands.join("\n");
  const blob = new Blob([fileContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = "sculpture.mcfunction";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
