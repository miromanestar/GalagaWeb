function preload () {
    this.load.image('alien', 'assets/sprites/alien.png');
}

function create () {
    aliens = this.physics.add.group({
        key: 'alien',
        repeat: 25,
        setXY: { x: 12, y: 0, stepX: 70 },
        setDisplaySize: {x: 100, y: 100}
    });

    alien.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });
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
    width: window.innerWidth * .95,
    height: window.innerHeight * .95,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
    }
};

var game = new Phaser.Game(config);