import Phaser from "phaser";
import PreloadScene from "./scenes/PreloadScene";
import GameScene from "./scenes/GameScene";

const config = {
  type: Phaser.AUTO,
  width: 640,
  height: 360,
  scene: [PreloadScene, GameScene],
};

const game = new Phaser.Game(config);
