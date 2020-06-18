import Phaser from 'phaser';
import backgroundPng from '../assets/background.png'

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene')
  }

  preload() {
    this.load.image('background', backgroundPng);
  }

  create() {
    this.scene.start('GameScene');
  }
}
