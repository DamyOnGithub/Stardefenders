var game = new Phaser.Game(1350, 650, Phaser.AUTO, 'gameDiv');
game.state.add('boot', bootState);
game.state.add('load', loadState);
//game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('high', highState);

game.state.start('boot');
