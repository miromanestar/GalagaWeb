var config = {
    type: Phaser.AUTO,
    width: 940,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('alien', 'assets/sprites/alien.png');

}

function create ()
{
    var alien = this.physics.add.image(100, 100, 'alien');

    alien.setDisplaySize(100, 100);
    alien.setVelocity(100, 200);
    alien.setBounce(1, 1);
    alien.setCollideWorldBounds(true);
}