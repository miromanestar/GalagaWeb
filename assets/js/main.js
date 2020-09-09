var pSpeed = 5;

function preload () {
    this.load.image('alien', 'assets/sprites/alien.png');
    this.load.image('player', 'assets/sprites/player.png');
}

function create () {
    player = this.physics.add.sprite(640, 650, 'player');
    player.setBounce(0.2);
    player.setCollideWorldBounds(false);
    player.setDisplaySize(100, 100);

    var aliens = this.add.group({
        key: 'alien',
        repeat: 5,
        setXY: {
            x: 110,
            y: 100,
            stepX: 100,
            stepY: 0
        },
        setScale: { x: 0.1, y: 0.1}
    });
}

function update() {
    cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown) {
        //player.setVelocityX(-500);
        player.x -= pSpeed;

    }
    if (cursors.right.isDown) {
        //player.setVelocityX(500);
        player.x += pSpeed;
    }
    if (cursors.up.isDown && player.y > 500) {
        //player.setVelocityY(-500);
        player.y -= pSpeed;
    }
    if (cursors.down.isDown && player.y < 660) {
        //player.setVelocityY(500);
        player.y += pSpeed;
    }

    if(player.x < 0) {
        player.x = 1280;
    }
    if(player.x > 1280) {
        player.x = 0;
    }
}

function createAlien() {
    var alien = this.physics.add.image(100, 100, 'alien');

    alien.setDisplaySize(100, 100);
    alien.setVelocity(100, 200);
    alien.setBounce(1, 1);
    alien.setCollideWorldBounds(true);
}

var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);