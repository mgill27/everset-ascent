scene.set_background_image(assets.image("""
    Bigger mountain
"""))
Climber = sprites.create(assets.image("""
    Climber back
"""), SpriteKind.player)
controller.move_sprite(Climber, 100, 0)
Climber.y = 100
Climber.set_stay_in_screen(True)
Snowball = sprites.create(assets.image("""
    Snowball
"""), SpriteKind.enemy)
Snowball.x = randint(0, scene.screen_width())
Snowball.y = 0

def on_forever():
    Snowballcount = 0
    if Snowballcount < 5:
        pass
forever(on_forever)

def on_update_interval():
    global Snowball
    if Snowball.y > scene.screen_height():
        sprites.destroy(Snowball)
        Snowball = sprites.create(assets.image("""
            Snowball
        """), SpriteKind.enemy)
        Snowball.x = randint(0, scene.screen_width())
        Snowball.y = 0
game.on_update_interval(500, on_update_interval)
