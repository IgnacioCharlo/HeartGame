window.onload = function () {
  'use strict';

  var game
    , ns = window['plataformer'];

  game = new Phaser.Game(750 ,500, Phaser.AUTO, 'plataformer-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('game', ns.Game);

  game.state.start('boot');
};
