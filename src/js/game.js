  (function() {
    'use strict';

    function Game() {
      this.player = null;
      this.bars = null;
      this.bar = null;
    }

    Game.prototype = {

      create: function () {
      	this.game.physics.startSystem(Phaser.Physics.ARCADE);
      	
        var x = this.game.width / 2
          , y = this.game.height / 2;

        this.player = this.add.sprite(x, y, 'player');

        this.bars = this.add.group();
        this.bars.enablebody = true;
        this.bars.physicsBodyType = Phaser.Physics.ARCADE;
        //sprite(0, 400, 'bar');
        this.bar = this.bars.create(0, 200, 'bar');
        this.bar = this.bars.create(0, 400, 'bar');
        this.game.physics.enable( [this.bar, this.player], Phaser.Physics.ARCADE);
        //Aqui he intentado poner "bars" para que se aplique al grupo entero, pero no me deja, y con "bar" solo se aplica a la ultima "bar" 
        //que hayamos creado. A parte, no he podido trabajar mucho más porque la puta maquina virtual se me quedaba pillada todo el tiempo, y lo
        //de github también ha sido una movida que no he podido arreglar sin ayuda de Sean

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
       
        this.game.physics.arcade.collide(this.player, this.bars);

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
