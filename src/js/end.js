(function() {
  'use strict';

  function End() {
    
  }

  End.prototype = {

    create: function () {
     

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