var playState = {

    create: function() {


        var player;
        //var ships;
        var ships2;
        var cursors;
        var lasers;
        this.laserTime = 0;
        //this.that = this;
        this.life = 3;
        var alive = true;
        var play = true;
        var thisships;

        var stars;
        this.score = 0;
        /*  VOor powerup bij aantal punten. Als score = scorelimit, dan spawn powerup  = ster in test
        var scoreLimit = 100;
        */
        //var scoreText;

        console.log(this);
    	//music
    	music = game.add.audio('music');

    	musicButton = game.input.keyboard.addKey(Phaser.Keyboard.P);


    	//game.add.sprite(400,200, 'ship');
    	//enemy.enableBody = true;

//was  ist loss Leute?

    	// Shoot

    	this.fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


        // The player and its settings

    	//player.scale.setTo(0.2, 0.2);

        //  Finally some stars to collect
        /*this.stars = game.add.group();

        //  We will enable physics for any star that is created in this group
        this.stars.enableBody = true;


        //  Here we'll create 12 of them evenly spaced apart
        for (var i = 0; i < 12; i++)
        {
            //  Create a star inside of the 'stars' group
            var star = stars.create(i * 70, 0, 'star');

            //  Let gravity do its thing
            star.body.gravity.y = 300;

            //  This just gives each star a slightly random bounce value
            star.body.bounce.y = 0.7 + Math.random() * 0.2;
        }


    	this.stars.setAll('outOfBoundsKill', true);*/
        //  The score



        console.log(this.ships);

        game.physics.startSystem(Phaser.Physics.ARCADE);
    	game.physics.arcade.setBounds(0, 300, 1300, 300);

        //  A simple background for our game
        game.add.sprite(0, 0, 'space1');

        music.play();

        this.ships = game.add.group();
        this.ships.enableBody = true;
    	game.physics.arcade.enable(this.ships);
    	this.ships.createMultiple(15, 'ship');
        this.ships.setAll('body.setSize.x', 30);
        this.ships.setAll('anchor.x', 0.5);
        this.ships.setAll('anchor.y', 0.5);
        this.ships.setAll('scale.x', 1);
        this.ships.setAll('scale.y', 1);
        this.ships.setAll('angle', 0);
        this.ships.setAll('outOfBoundsKill', true);
        this.ships.setAll('checkWorldBounds', true);
			
			this.ships2 = game.add.group();
        this.ships2.enableBody = true;
    	game.physics.arcade.enable(this.ships2);
    	this.ships2.createMultiple(5, 'ship2');
        this.ships2.setAll('anchor.x', 0.5);
        this.ships2.setAll('anchor.y', 0.5);
        this.ships2.setAll('scale.x', 0.5);
        this.ships2.setAll('scale.y', 0.5);
        this.ships2.setAll('angle', 0);
        this.ships2.setAll('outOfBoundsKill', true);
        this.ships2.setAll('checkWorldBounds', true);


        this.lasersl = game.add.group();
        this.lasersl.enableBody = true;
        game.physics.arcade.enable(this.lasersl);
        this.lasersl.createMultiple(50, 'laser');
        this.lasersl.setAll('anchor.x', -1);
        this.lasersl.setAll('anchor.y', 0.1);
        this.lasersl.setAll('outOfBoundsKill', true);
        this.lasersl.setAll('checkWorldBounds', true);

        this.lasersr = game.add.group();
        this.lasersr.enableBody = true;
        game.physics.arcade.enable(this.lasersr);
        this.lasersr.createMultiple(50, 'laser');
        this.lasersr.setAll('anchor.x', -7.7);
        this.lasersr.setAll('anchor.y', 0.1);
        this.lasersr.setAll('outOfBoundsKill', true);
        this.lasersr.setAll('checkWorldBounds', true);

        this.player = game.add.sprite(game.world.width - 675, game.world.height - 150, 'xwingship');
    	this.player.animations.add('fly', [0, 1], 5, true);
    	this.player.animations.play('fly');
        game.physics.arcade.enable(this.player);

        //  Player physics properties. Give the little guy a slight bounce.
        this.player.body.bounce.y = 0.2;
        //player.body.gravity.y = 300;
        this.player.body.collideWorldBounds = true;

        this.scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#FE2EF7' });
    	this.lifeText = game.add.text(400, 16, 'life: 3', { fontSize: '32px', fill: '#FE2EF7' });
        this.cursors = game.input.keyboard.createCursorKeys();

        this.launchship();
			this.launchship2();

        console.log(this.ships);



        //this.launchship2();

    },

    update: function() {

        //  Collide the player and the stars with the platforms


    	game.physics.arcade.overlap(this.lasersr, this.ships, this.killship, null, this);
    	//game.physics.arcade.overlap(this.lasersl, this.ships2, this.killship2, null, this);
    	game.physics.arcade.overlap(this.player, this.ships, this.PlayerDeathShips, null, this);
    	//game.physics.arcade.overlap(this.player, this.ships2, this.PlayerDeathShips2, null, this);
    	this.playerDie();
    	//playMusic();


        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
        game.physics.arcade.overlap(this.player, this.stars, this.collectStar, null, this);

        //  Reset the players velocity (movement)

        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        if (this.cursors.left.isDown)
        {
            this.player.body.velocity.x = -400;
        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.velocity.x = 400;
        }

        if (this.cursors.up.isDown)
        {
            this.player.body.velocity.y = -400;
        }
        else if (this.cursors.down.isDown)
        {
            this.player.body.velocity.y = 400;
        }
    	if (this.fireButton.isDown)
            {
                this.firelaser();
            }
    	if (musicButton.isDown)
    		{
                console.log("lol");
    			if (play == true) {
    				music.stop();
    				play = false;
    			}
    			else if (play == false) {
    				play = true;
    				music.play();
    			}

    		}

    },

    PlayerDeathShips: function (player, ships) {

        // Removes the star from the screen
      this.life -= 1;
    	ships.kill();

    },

    /*PlayerDeathShips2: function  (player,ships2) {
    	this.life -= 1;
    	ships2.kill();

    },*/
    playerDie: function  () {
    	this.lifeText.text = 'Life: ' + this.life;
    	if (this.life < 1) {
    		this.player.kill();
    		this.alive = false;
    	}
    },
    	// Kill the Tie Fighters
    starkiller: function  (lasersr, star) {

        // Removes the star from the screen
        star.kill();

    },
    starkillel: function  (lasersl, star) {

        // Removes the star from the screen
        star.kill();

    },
    killship: function  (lasers, ships) {

        //this.lasers.kill();
        this.resetlaserl();
        this.resetlaserr();
        ships.kill();

    	this.score += 10;
        this.scoreText.text = 'Score: ' + this.score;
    },

    /*killship2: function  (lasers, ships2) {

        lasers.kill();
        ships2.kill();

    	score += 20;
        scoreText.text = 'Score: ' + score;
    },*/
    firelaser: function  () {

        //  To avoid them being allowed to fire too fast we set a time limit
    		if (this.alive == this.true) {

            	if (game.time.now > this.laserTime)
            	{
                    //  Grab the first laser we can from the pool
                    this.laserl = this.lasersl.getFirstExists(false);
            		this.laserr = this.lasersr.getFirstExists(false);

                    if (this.laserl)
                    {
                        //  And fire it
                        this.laserl.reset(this.player.x, this.player.y + 8);
                        this.laserl.body.velocity.y = -800;
                        this.laserTime = game.time.now + 200;
                    }
            		if (this.laserr)
                    {
                        //  And fire it
                        this.laserr.reset(this.player.x, this.player.y + 8);
                        this.laserr.body.velocity.y = -800;
                        this.laserTime = game.time.now + 200;
                    }
                }
            }

    },

    launchship: function () {
        var min_enemy_spacing = 150;
        var max_enemy_spacing = 600;
        var enemy_speed = 200;
        var enemies = this.ships.getFirstExists(false);
        //enemies.body.setSize(30, 60, 30, 40);

        if (enemies) {
            enemies.reset(game.rnd.integerInRange(50, game.width - 50), -10);
            enemies.body.velocity.x = game.rnd.integerInRange(-300, 300);
            enemies.body.velocity.y = enemy_speed;
            enemies.body.drag.x = 100;
        }
        game.time.events.add(game.rnd.integerInRange(min_enemy_spacing, max_enemy_spacing), this.launchship, this);
    },

    resetlaserl: function  (laserl) {

        //  Called if the laser goes out of the screen
        this.laserl.kill();

    },
    resetlaserr: function  (laserr) {

        //  Called if the laser goes out of the screen
        this.laserr.kill();

    },

    render: function (render) {
        enemies = this.ships.getFirstExists(false);
	game.debug.body(this.player);
    this.ships.forEachAlive(this.renderGroup, this)

	game.debug.body(this.ships.alive);
},
	
	launchship2: function () {
        var min_enemy_spacing = 150;
        var max_enemy_spacing = 600;
        var enemy_speed = 200;
        var enemies = this.ships2.getFirstExists(false);
				console.log("hallo");
        if (enemies) {
            enemies.reset(game.rnd.integerInRange(50, game.width - 50), -10);
            enemies.body.velocity.x = game.rnd.integerInRange(-300, 300);
            enemies.body.velocity.y = enemy_speed;
            enemies.body.drag.x = 100;
        }
        game.time.events.add(game.rnd.integerInRange(min_enemy_spacing, max_enemy_spacing), this.launchship2, this);
    },

renderGroup: function(member) {
        game.debug.body(member);
}
    //onderstaande werkt niet
};
