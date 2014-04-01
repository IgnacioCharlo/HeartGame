(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;


      //this.titleTxt = this.add.bitmapText(x, y, 'minecraftia','Example Game', 10);
      //this.titleTxt.anchor.setTo(0.5, 0.5);

      //y = y + this.titleTxt.height + 5;
      this.startTxt = this.add.bitmapText(250, 100,'minecraftia', 'PROTECT THE HEART', 20);
      this.RULESTxt = this.add.bitmapText(270, 200,'minecraftia', 'You re a white blood cell, ', 12);
      this.RULES2Txt = this.add.bitmapText(120, 220,'minecraftia', ' and your heart needs you to protect him from the virus! ', 12);
      //this.startTxt.anchor.setTo(0.5, 0.5);

      this.input.onDown.add(this.onDown, this);
    },

    update: function () {

    },

    onDown: function () {
      this.game.state.start('game');
    }
  };

  window['plataformer'] = window['plataformer'] || {};
  window['plataformer'].Menu = Menu;

}());
