const fs = require('fs')
const keymap = require('./keymap.json')

const current = {}
const didChange = {}

for (let layerIndex = 0; layerIndex < keymap.layers.length; layerIndex++) {
  const layer_name = keymap.layer_names[layerIndex]
  const layer = keymap.layers[layerIndex]

  for (let keyIndex = 0; keyIndex < layer.length; keyIndex++) {
    const key = layer[keyIndex]

    if (current[keyIndex] && current[keyIndex] !== key && key !== '&trans') {
      didChange[keyIndex] = true
      console.log('changed:', layer_name, keyIndex, current[keyIndex], '->', key)
    } else if (current[keyIndex]) {
      console.log('dedupe', layer_name, keyIndex, 'still is', current[keyIndex])
      layer[keyIndex] = '&trans'
    }

    current[keyIndex] = key
  }
}

fs.writeFileSync('./keymap.json', JSON.stringify(keymap, null, 2))