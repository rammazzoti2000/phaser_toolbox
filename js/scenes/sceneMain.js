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
    var mediaManager = new MediaManager({scene: this});

    var sb = new SoundButtons({scene: this});
  }

  update() {
  // constant running loop
  }
  customFunctions() {

  }
}