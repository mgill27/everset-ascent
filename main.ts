function Destroy_and_subtract () {
    sprites.destroy(Snowball)
    Snowballcount += -1
}
let Snowball: Sprite = null
scene.setBackgroundImage(assets.image`Bigger mountain`)
let Climber = sprites.create(assets.image`Climber back`, SpriteKind.Player)
controller.moveSprite(Climber, 100, 0)
Climber.y = 100
Climber.setStayInScreen(true)
Snowball = sprites.create(assets.image`Snowball`, SpriteKind.Enemy)
let Snowballcount = 1
Snowball.x = randint(0, scene.screenWidth())
Snowball.y = 0
forever(function () {
    if (Snowballcount < 5) {
    	
    }
})
game.onUpdateInterval(500, function () {
    if (Snowball.y > scene.screenHeight()) {
        Destroy_and_subtract()
        Snowball = sprites.create(assets.image`Snowball`, SpriteKind.Enemy)
        Snowball.x = randint(0, scene.screenWidth())
        Snowball.y = 0
    }
})
