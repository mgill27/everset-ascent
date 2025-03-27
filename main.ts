function SpawnSnowballs () {
    for (let index = 0; index < randint(0, 3); index++) {
        if (activeSnowballs < 3) {
            Snowball = sprites.create(assets.image`Snowball`, SpriteKind.Projectile)
            Snowball.x = randint(0, scene.screenWidth())
            Snowball.y = 0
            Snowball.setVelocity(0, randint(speed, speed + 25))
            activeSnowballs += 1
        }
    }
}
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(Snowball)
    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    flashing = true
    Flash()
    flashing = false
    pause(500)
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
let flashing = false
let Snowball: Sprite = null
let Climber: Sprite = null
let speed = 0
let activeSnowballs = 0
game.splash("You need to reach 100 altitude-")
game.splash("before the mountain collapses.")
scene.setBackgroundImage(assets.image`Smile`)
game.splash("Good luck!")
info.setScore(0)
activeSnowballs = 0
speed = 50
scene.setBackgroundImage(assets.image`Bigger mountain`)
Climber = sprites.create(assets.image`Climber back`, SpriteKind.Player)
controller.moveSprite(Climber, 100, 0)
Climber.y = 100
Climber.setStayInScreen(true)
Snowball = sprites.create(assets.image`Snowball`, SpriteKind.Projectile)
Snowball.x = randint(0.5, scene.screenWidth() - 0.5)
Snowball.y = 0
Snowball.setVelocity(0, speed)
game.onUpdateInterval(5000, function () {
    if (info.score() > 5) {
        SpawnSnowballs()
    }
})
game.onUpdateInterval(500, function () {
    if (Snowball.y > scene.screenHeight()) {
        Snowball = sprites.create(assets.image`Snowball`, SpriteKind.Projectile)
        Snowball.x = randint(0, scene.screenWidth())
        Snowball.y = 0
        Snowball.setVelocity(0, 50)
        speed += 1
        info.changeScoreBy(1)
    } else if (false) {
    	
    }
})
