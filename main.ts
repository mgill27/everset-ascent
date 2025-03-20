controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (flashing == true) {
    	
    } else {
        animation.runImageAnimation(
        Climber,
        assets.animation`Walking`,
        200,
        true
        )
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (flashing == true) {
    	
    } else {
        animation.runImageAnimation(
        Climber,
        assets.animation`idle`,
        200,
        true
        )
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (flashing == true) {
    	
    } else {
        animation.runImageAnimation(
        Climber,
        assets.animation`idle`,
        200,
        true
        )
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (flashing == true) {
    	
    } else {
        animation.runImageAnimation(
        Climber,
        assets.animation`Walking`,
        200,
        true
        )
    }
})
function Flash () {
    animation.runImageAnimation(
    Climber,
    assets.animation`damage anim`,
    200,
    true
    )
    pause(500)
    animation.runImageAnimation(
    Climber,
    assets.animation`idle`,
    200,
    true
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    flashing = true
    Flash()
    flashing = false
})
let flashing = false
let Climber: Sprite = null
let speed = 50
scene.setBackgroundImage(assets.image`Bigger mountain`)
Climber = sprites.create(assets.image`Climber back`, SpriteKind.Player)
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
        speed += 1
    }
})
