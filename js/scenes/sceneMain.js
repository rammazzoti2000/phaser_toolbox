/* eslint-disable class-methods-use-this */
class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }

  preload() {
    // load our images or sounds
    // this.load.image('key', 'path')
  }

  create() {
    // define our objects

    emitter = new Phaser.Events.EventEmitter();
    controller = new Controller();
    const mediaManager = new MediaManager({ scene: this });

    const sb = new SoundButtons({ scene: this });
  }

  update() {
  // constant running loop
  }

  customFunctions() {}
}