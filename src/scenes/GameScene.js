import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene')
  }

  preload() {
  }

  create() {
    this.add.sprite(0, 0, 'background').setOrigin(0);

    // игрок
    this.player = this.add.sprite(40, this.sys.game.config.height / 2, 'player');

    // уменьшить масштаб
    this.player.setScale(0.5);
  }

  update() {

  }
}
