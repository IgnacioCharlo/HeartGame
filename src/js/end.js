(function() {
  'use strict';

  function End() {
    
  }

  End.prototype = {

    create: function () {
    	this.startTxt = this.add.bitmapText(230, 100,'minecraftia', 'GAME OVER', 50);
    	//this.startTxt = this.add.bitmapText(230, 100,'minecraftia', 'GAME OVER', 50);
    	this.scoreText = this.add.bitmapText(320, 170, 'minecraftia', 'SCORE:' + window.plataformer.Global.score, 25);
    	this.startTxt = this.add.bitmapText(240, 300,'minecraftia', 'Click here to play again', 20);
    	
    	this.input.onDown.add(this.onDown, this);
    },

    update: function () {

    },

    onDown: function () {
      this.game.state.start('game');
    }
  };

  window['plataformer'] = window['plataformer'] || {};
  window['plataformer'].End = End;

}());