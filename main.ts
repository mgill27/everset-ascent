scene.setBackgroundImage(assets.image`Bigger mountain`)
let Climber = sprites.create(assets.image`Climber back`, SpriteKind.Player)
controller.moveSprite(Climber, 100, 0)
Climber.y = 100
Climber.setStayInScreen(true)
let Snowball = sprites.create(assets.image`Snowball`, SpriteKind.Enemy)
Snowball.x = scene.screenWidth() / 2
Snowball.y = 0
