let speed = 100
scene.setBackgroundImage(assets.image`Bigger mountain`)
let Climber = sprites.create(assets.image`Climber back`, SpriteKind.Player)
controller.moveSprite(Climber, 100, 0)
Climber.y = 100
Climber.setStayInScreen(true)
let Snowball = sprites.create(assets.image`Snowball`, SpriteKind.Projectile)
Snowball.x = randint(0, scene.screenWidth())
Snowball.y = 0
Snowball.setVelocity(0, speed)
game.onUpdateInterval(500, function () {
    if (Snowball.y > scene.screenHeight()) {
        Snowball = sprites.create(assets.image`Snowball`, SpriteKind.Enemy)
        Snowball.x = randint(0, scene.screenWidth())
        Snowball.y = 0
        Snowball.setVelocity(0, 50)
    }
})
