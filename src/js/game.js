  (function() {
    'use strict';

    function Game() {
      this.player = null;
      this.bars = null;
      this.bar = null;
      this.bar2 = null;
      this.bar3 = null;
      this.bar4 = null;
      this.bar5 = null;
      this.enemyvelocity = null;
      this.heart = null;
      this.score = null,
      
     
      this.enemy1exist = null;
      this.enemy2exist = null;
      this.enemy3exist = null;
      
      this.scoreText = null;
    }

    Game.prototype = {

      create: function () {
      	this.game.physics.startSystem(Phaser.Physics.ARCADE);
      	this.enemyvelocity = 350;
        var x = 499
          , y = 325;
        
        this.background = this.game.add.tileSprite(0, 0, 750, 500, 'background');
        this.enemyvelocity = 100;
        this.score = 0;
       
        this.enemy1exist = false;
        this.enemy2exist = false;
        this.enemy3exist = false;
       
        this.heart = this.add.sprite(320, 400, 'heart');
        this.heart.animations.add('beat');
        this.game.physics.enable(this.heart, Phaser.Physics.ARCADE);
        this.heart.enablebody = true;
        this.heart.body.immovable = true;
        this.heart.body.collideWorldBounds = true;
        
        //this.heart.animations.play('beat', 20, true);
        this.player = this.add.sprite(x, y, 'white');
        
        
        
        this.bars = this.add.group();
        this.bars.enablebody = true;
        this.bars.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.enemy = this.add.group();
        this.enemy.enablebody = true;
        this.enemy.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.bar = this.bars.create(120, 300, 'bar');
        this.bar2 = this.bars.create(0, 500, 'mediumbar');
        this.bar3 = this.bars.create(750, 500, 'mediumbar');
        this.bar4 = this.bars.create(0, 100, 'shortbar');
        this.bar5 = this.bars.create(750, 100, 'shortbar');
        
        this.game.physics.enable( [this.bar, this.bar2, this.bar3, this.bar4, this.bar5, this.player], Phaser.Physics.ARCADE);
        
        this.explosions = this.game.add.group();
        this.explosions.createMultiple(1000, 'boom');
        
        
        this.bar.body.immovable = true;
        this.bar.body.collideWorldBounds = true;
        
        this.bar2.body.immovable = true;
        this.bar2.body.collideWorldBounds = true;
        
        this.bar3.body.immovable = true;
        this.bar3.body.collideWorldBounds = true;
        
        this.bar4.body.immovable = true;
        this.bar4.body.collideWorldBounds = true;
        
        this.bar5.body.immovable = true;
        this.bar5.body.collideWorldBounds = true;
        
        this.player.body.collideWorldBounds = true;
        this.player.body.bounce.set(0.0);
        this.player.body.gravity.y = 350;
        
     ////////////////////////////////////   
        
        this.scoreText = this.add.text(20, 0, 'SCORE:' + this.score, { font: "20px Arial", fill: "#ffffff", align: "left" });
        
      },

      update: function () {
        var x, y, cx, cy, dx, dy, angle, scale;

        x = this.input.position.x;
        y = this.input.position.y;
        cx = this.world.centerX;
        cy = this.world.centerY;
       
        this.heart.animations.play('beat', 4, true);
        
        if(!this.enemy1exist){
        	
        	this.enemy1 = this.enemy.create(20, 50, 'virus');
        	this.game.physics.enable(this.enemy1, Phaser.Physics.ARCADE);
        	
            this.enemy1.body.velocity.x = this.enemyvelocity;
            this.enemy1.body.collideWorldBounds = true;
            this.enemy1.body.gravity.y = 800;
        	this.enemy1exist = true;
        	this.enemy1.body.bounce.set(0.8);
     
        	this.game.physics.enable( [this.bar, this.bar2, this.bar3, this.bar4, this.bar5, this.player, this.enemy1], Phaser.Physics.ARCADE);
        }
        
        if(this.enemy1exist){
        	if(this.enemy1.x > 690){
        		this.enemy1.body.velocity.x = -this.enemyvelocity;
        		
        	}
        	else if(this.enemy1.x < 1){
        		this.enemy1.body.velocity.x = this.enemyvelocity;	
        		
        	}
        	
        }
        
        if(!this.enemy2exist){
        	
        	this.enemy2 = this.enemy.create(680, 50, 'virus');
        	this.game.physics.enable(this.enemy2, Phaser.Physics.ARCADE);
        	
            this.enemy2.body.velocity.x = -this.enemyvelocity;
            this.enemy2.body.collideWorldBounds = true;
            this.enemy2.body.gravity.y = 800;
        	this.enemy2exist = true;
        	this.enemy2.body.bounce.set(0.8);
     
        	this.game.physics.enable( [this.bar, this.bar2, this.bar3, this.bar4, this.bar5, this.player, this.enemy2], Phaser.Physics.ARCADE);
        }
        
        if(this.enemy2exist){
        	if(this.enemy2.x > 690){
        		this.enemy2.body.velocity.x = -this.enemyvelocity;
        		
        	}
        	else if(this.enemy2.x < 1){
        		this.enemy2.body.velocity.x = this.enemyvelocity;	
        		
        	}
        	
        }
        
        
        if(!this.enemy3exist){
        	
        	this.enemy3 = this.enemy.create(370, 20, 'virus');
        	this.game.physics.enable(this.enemy3, Phaser.Physics.ARCADE);
        	
            this.enemy3.body.velocity.x = -this.enemyvelocity;
            this.enemy3.body.collideWorldBounds = true;
            this.enemy3.body.gravity.y = 800;
        	this.enemy3exist = true;
        	this.enemy3.body.bounce.set(0.8);
     
        	this.game.physics.enable( [this.bar, this.bar2, this.bar3, this.bar4, this.bar5, this.player, this.enemy3], Phaser.Physics.ARCADE);
        }
        
        if(this.enemy3exist){
        	if(this.enemy3.x > 690){
        		this.enemy3.body.velocity.x = -this.enemyvelocity;
        		
        	}
        	else if(this.enemy3.x < 1){
        		this.enemy3.body.velocity.x = this.enemyvelocity;	
        		
        	}
        	
        }
        
        
        //this.physics.overlap(this.player, this.enemy1, function (player,enemigos){enemigos.kill();player.kill();window.spaceinvaders.Global.score = this.score; /*this.game.state.start('end');*/}, null, this);
       /* while(!this.enemy2exist){
        	
        }
        
       */
        
        //this.game.physics.arcade.overlap(this.player, this.enemy, this.killEnemy1, null, this);
        //this.game.physics.arcade.overlap(this.player, this.enemy2, this.killEnemy2, null, this);
        
        //this.game.physics.arcade.overlap(this.enemy1, this.enemy2, this.colissionEnemies, null, this);
        this.game.physics.arcade.collide(this.enemy, this.enemy)
        
        this.game.physics.arcade.collide(this.player, this.bars);
        this.game.physics.arcade.collide(this.player, this.enemy1, this.killEnemy1,null,this);
        this.game.physics.arcade.collide(this.player, this.enemy2, this.killEnemy2,null,this);
        this.game.physics.arcade.collide(this.player, this.enemy3, this.killEnemy3,null,this);
        
        
        this.game.physics.arcade.collide(this.heart, this.enemy1, this.endGame,null,this);
        this.game.physics.arcade.collide(this.heart, this.enemy2, this.endGame,null,this);
        this.game.physics.arcade.collide(this.heart, this.enemy3, this.endGame,null,this);
        
        this.game.physics.arcade.collide(this.enemy, this.bars);

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
          this.player.body.velocity.x = -200;
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        	this.player.body.velocity.x = 200;
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
          this.player.body.velocity.y = -200;
        }
        /*else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
          this.player.body.velocity.y = 200;
        }*/
        /*if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        	this.player.body.velocity.x = -200;
            this.player.body.velocity.y = 200;
        }*/
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        	this.player.body.velocity.x = -200;
            this.player.body.velocity.y = -200;
        }
        /*if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        	this.player.body.velocity.x = 200;
            this.player.body.velocity.y = 200;
        }*/
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        	this.player.body.velocity.x = 200;
            this.player.body.velocity.y = -200;
        }
        this.scoreText.text= 'Score: ' + this.score;
        //this.scoreText.content = 'SCORE: ' + this.score;
      },

      killEnemy1 : function(player, enemy){
    	  this.enemy1exist = false;
    	  enemy.kill();
    	  this.enemyvelocity +=5;
    	  this.score ++;
    	 // this.scoreText.content = 'SCORE: ' + this.score;
    	  
      },
      killEnemy2 : function(player, enemy){
    	  this.enemy2exist = false;
    	  enemy.kill();
    	  this.enemyvelocity +=5;
    	  this.score ++;
    	 // this.scoreText.content = 'SCORE: ' + this.score;
      },
      killEnemy3 : function(player, enemy){
    	  this.enemy3exist = false;
    	  enemy.kill();
    	  this.enemyvelocity +=5;
    	  this.score ++;
    	  //this.scoreText.content = 'SCORE: ' + this.score;
      },
      endGame : function(){
    	  window.plataformer.Global.score = this.score;  
    	  console.log("Hola");
    	  this.game.state.start('end');
    	  //, null, this);
    	  //aqui que pase a endGame.js
      },	 
     
      
      colissionEnemies : function(enemy1,enemy2){
    	  
    	  enemy1.y -= 2;
    	  
    	  if(enemy1.body.velocity.x === this.enemyvelocity){
    		  enemy1.body.velocity.x = -this.enemyvelocity;
    		  
    	  }
    	  else{
    		  enemy1.body.velocity.x = this.enemyvelocity;
    	  }
    	  
    	  
    	  if(enemy2.body.velocity.x === this.enemyvelocity){
    		  enemy2.body.velocity.x = -this.enemyvelocity;
    		  
    	  }
    	  else{
    		  enemy2.body.velocity.x = this.enemyvelocity;
    	  }
      }

    };

    window['plataformer'] = window['plataformer'] || {};
    window['plataformer'].Game = Game;

  }());
