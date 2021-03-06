(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {

    preload: function () {
      
      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
      //this.load.image('player', 'assets/player.png');
      this.load.spritesheet('boom','assets/boom.png',128,128);
      this.load.spritesheet('heart', 'assets/heart.png',100,97);
      this.load.image('shortbar', 'assets/barracorta.png');
      this.load.image('mediumbar', 'assets/mediumbar.png');
      this.load.image('bar', 'assets/bar.png');
      this.load.image('background', 'assets/background.jpg');
      this.load.image('white', 'assets/globulo.png');
      this.load.image('virus', 'assets/virus.png');
      
      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
    },

    create: function () {
      this.asset.cropEnabled = false;
    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['plataformer'] = window['plataformer'] || {};
  window['plataformer'].Preloader = Preloader;

}());
