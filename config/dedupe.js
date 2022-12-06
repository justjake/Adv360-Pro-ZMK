const fs = require("fs");
const keymap = require("./keymap.json");

const current = {};
const didChange = {};

for (let layerIndex = 0; layerIndex < keymap.layers.length; layerIndex++) {
  const layer_name = keymap.layer_names[layerIndex];
  const layer = keymap.layers[layerIndex];

  for (let keyIndex = 0; keyIndex < layer.length; keyIndex++) {
    const keyWithWhitespace = layer[keyIndex];
    const key = keyWithWhitespace.trim();

    if (current[keyIndex] && current[keyIndex] !== key && key !== "&trans") {
      didChange[keyIndex] = true;
      console.log(
        "changed:",
        layer_name,
        keyIndex,
        current[keyIndex],
        "->",
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
      let newKey = "&trans";
      const needSpaces = keyWithWhitespace.length - newKey.length;
      if (needSpaces > 0) {
        newKey = newKey + " ".repeat(needSpaces);
      }
      layer[keyIndex] = "&trans";
    }

    current[keyIndex] = key;
  }
}

fs.writeFileSync("./keymap.json", JSON.stringify(keymap, null, 2));

