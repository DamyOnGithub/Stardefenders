var preloadState = function(game) {}

    preload: function () {
        game.load.image('space1', 'assets/space1.jpg');
        game.load.image('star', 'assets/star.png');
    	game.load.image('laser', 'assets/laser.png');
        game.load.spritesheet('xwing', 'assets/xwing.gif', 0, 0);
    	game.load.image('ship', 'assets/ship.png');
    	game.load.image('ship2', 'assets/ship2.png');
        game.load.audio('music', 'assets/Theme.mp3')
    	game.load.spritesheet('xwingship', 'assets/xwingspritesheet.png', 128, 128);
    }

    //start: function() {
    //    game.state.start('game')
    //}
