(function() {
  'use strict';

  function Game() {
    this.player = null;
    this.Barra = null;
  }

  Game.prototype = {

    create: function () {
    	this.game.physics.startSystem(Phaser.Physics.ARCADE);
    	
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.player = this.add.sprite(x, y, 'player');
      this.Barra = this.add.sprite(0, 400, 'Barra');
      
      //this.game.physics.arcade.gravity.y = 100;
      this.game.physics.enable( [this.Barra, this.player], Phaser.Physics.ARCADE);
      this.Barra.body.immovable = true;
      this.Barra.body.collideWorldBounds = true;
      
      this.player.body.collideWorldBounds = true;
      this.player.body.bounce.y = 0.5;
      this.player.body.gravity.y = 100;
      
    },

    update: function () {
      var x, y, cx, cy, dx, dy, angle, scale;

      x = this.input.position.x;
      y = this.input.position.y;
      cx = this.world.centerX;
      cy = this.world.centerY;
     
      this.game.physics.arcade.collide(this.player, this.Barra);
    },

    

  };

  window['plataformer'] = window['plataformer'] || {};
  window['plataformer'].Game = Game;

}());
