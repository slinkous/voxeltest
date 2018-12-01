var createGame = require('voxel-engine');

var game = createGame({
  texturePath: './textures/',
  generate: function(x, y, z) {
    return y === 1 ? 1 : 0
  },
  materials: ["#fff", "#000", "#ff0000"],
  materialFlatColor: true,
  chunkSize: 32,
  chunkDistance: 2,
  worldOrigin: [0, 0, 0],
  controls: { discreteFire: false },
  lightsDisabled: false,
  fogDisabled: false,
  generateChunks: true,
  mesher: voxel.meshers.culled,
  playerHeight: 1.62
});

// var textureEngine = require('voxel-texture')({
//   game: game,
//   texturePath: 'textures/'
// })
//
// textureEngine.load(['grass', 'dirt', 'grass_dirt']
)
var container = document.body;
game.appendTo(container);

var createPlayer = require('voxel-player')(game);

var dude = createPlayer('dude.png');
dude.possess();
dude.position.set(0,0, 0);
