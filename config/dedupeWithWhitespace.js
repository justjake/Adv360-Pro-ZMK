const fs = require("fs");
const shape = require("./whitespace.json");
const keymap = require('./keymap.json')
const output = './keymap.json'

const current = {};
const didChange = {};

for (let layerIndex = 0; layerIndex < keymap.layers.length; layerIndex++) {
  const layer_name = keymap.layer_names[layerIndex];
  const layer = keymap.layers[layerIndex];

  for (let keyIndex = 0; keyIndex < layer.length; keyIndex++) {
    const desiredLength = shape.layers[layerIndex][keyIndex].length || 0;
    const key = layer[keyIndex].trim();

    let outputKey = key
    if (current[keyIndex] && current[keyIndex] !== key && key !== "&trans") {
      didChange[keyIndex] = true;
      console.log(
        "changed:",
        layer_name,
        keyIndex,
        'prev layer was',
        current[keyIndex],
        ", -> this layer is",
        key
      );
    } else if (current[keyIndex]) {
      console.log(
        "dedupe",
        layer_name,
        keyIndex,
        "still is",
        current[keyIndex]
      );
      outputKey = '&trans'
    }

    if (desiredLength > outputKey.length) {
      outputKey = outputKey + ' '.repeat(desiredLength - outputKey.length)
    }

    current[keyIndex] = key
    layer[keyIndex] = outputKey
  }
}

fs.writeFileSync(output, JSON.stringify(keymap, null, 2));

