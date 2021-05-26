let distance = 0
basic.forever(function () {
    bitbot.select_model(BBModel.Auto)
    distance = bitbot.sonar(BBPingUnit.Centimeters)
    if (distance < 15) {
        bitbot.rotatems(BBRobotDirection.Right, 60, 400)
    } else {
        bitbot.go(BBDirection.Forward, 60)
    }
})
