var loadState =  {

    preload: function () {
        game.load.image('space1', 'assets/space1.jpg');
        game.load.image('background', 'assets/sky2.jpg');
        game.load.image('star', 'assets/star.png');
    	game.load.image('laser', 'assets/laser.png');
        game.load.spritesheet('xwing', 'assets/xwing.gif', 0, 0);
    	game.load.image('ship', 'assets/ship.png');
        game.load.image('tiefighter', 'assets/TieFighter.png');
    	game.load.image('ship2', 'assets/ship2.png');
        game.load.image('playButton', 'assets/play.png');
        game.load.image('highScoreButton', 'assets/highscores.png');
        game.load.image('levelSelectButton', 'assets/levelselect.png');
        game.load.image('logo', 'assets/logoSDtest.png');
        game.load.audio('music', 'assets/Theme.mp3');
    	game.load.spritesheet('xwingship', 'assets/xwingspritesheet.png', 128, 128);
    },

    create: function () {
        this.background = game.add.sprite(0, 0, 'background');
        this.background.scale.setTo(0.5, 0.5);
        this.wip = game.add.sprite(game.world.width - 675, game.world.height - 150,'tiefighter');
        this.logo = game.add.sprite(400, 125,'logo');
        this.logo.scale.setTo(0.25, 0.25);
        this.play = game.add.sprite(547, 325,'playButton');
        this.highscore = game.add.sprite(547, 400,'highScoreButton');
        this.levelSelect = game.add.sprite(547, 475,'levelSelectButton');
        this.play.inputEnabled = true;
        this.play.events.onInputDown.add(function() {this.listener(1)}, this);
        this.highscore.inputEnabled = true;
        this.highscore.events.onInputDown.add(function() {this.listener(2)}, this);


        //  Our controls.
    },

    listener: function(x) {
        if (x == 1) {
        game.state.start('play');
        }
        else if (x == 2) {
            game.state.start('high');
        }
}
};
    //start: function() {
    //    game.state.start('game')
    //}
