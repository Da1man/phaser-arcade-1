import Phaser from 'phaser';
import backgroundPng from '../assets/background.png';
import playerPng from '../assets/player.png';
import dragonPng from '../assets/dragon.png';
import treasurePng from '../assets/treasure.png';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene')
  }

  preload() {
    this.load.image('background', backgroundPng);
    this.load.image('player', playerPng);
    this.load.image('dragon', dragonPng);
    this.load.image('treasure', treasurePng);
  }

  create() {
    this.scene.start('GameScene');
  }
}
