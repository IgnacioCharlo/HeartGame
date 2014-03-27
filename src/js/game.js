  (function() {
    'use strict';

    function Game() {
      this.player = null;
      this.bar = null;
    }

    Game.prototype = {

      create: function () {
      	this.game.physics.startSystem(Phaser.Physics.ARCADE);
      	
        var x = this.game.width / 2
          , y = this.game.height / 2;

        this.player = this.add.sprite(x, y, 'player');
        this.bar = this.add.sprite(0, 400, 'bar');
        
        this.game.physics.enable( [this.bar, this.player], Phaser.Physics.ARCADE);
        this.bar.body.immovable = true;
        this.bar.body.collideWorldBounds = true;
        
        this.player.body.collideWorldBounds = true;
        this.player.body.bounce.set(0.0);
        this.player.body.gravity.y = 100;
        
      },

      update: function () {
        var x, y, cx, cy, dx, dy, angle, scale;

        x = this.input.position.x;
        y = this.input.position.y;
        cx = this.world.centerX;
        cy = this.world.centerY;
       
        this.game.physics.arcade.collide(this.player, this.bar);

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
          this.player.body.velocity.setTo(-200,0);
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
          this.player.body.velocity.setTo(200,0);
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
          this.player.body.velocity.setTo(0,-200);
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
          this.player.body.velocity.setTo(0,200);
        }

      },

      

    };

    window['plataformer'] = window['plataformer'] || {};
    window['plataformer'].Game = Game;

  }());
