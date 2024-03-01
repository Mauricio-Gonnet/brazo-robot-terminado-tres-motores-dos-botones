input.onButtonPressed(Button.A, function () {
    if (Pin == 0) {
        Angulo_0 += 2
        servos.P0.setAngle(Angulo_0)
    }
    if (Angulo_0 >= 180) {
        Angulo_0 = 180
        servos.P0.setAngle(Angulo_0)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (Pin == 1) {
        Ángulo_1 += 2
        servos.P1.setAngle(Ángulo_1)
    }
    if (Ángulo_1 >= 180) {
        Ángulo_1 = 180
        servos.P1.setAngle(Ángulo_1)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (Pin == 2) {
        Angulo_2 += 2
        servos.P2.setAngle(Angulo_2)
    }
    if (Angulo_2 >= 180) {
        Angulo_2 = 180
        servos.P2.setAngle(Angulo_2)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Pin == 0) {
        Pin = 1
    } else if (Pin == 1) {
        Pin = 2
    } else if (Pin == 2) {
        Pin = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (Pin == 0) {
        Angulo_0 += -2
        servos.P0.setAngle(Angulo_0)
    }
    if (Angulo_0 <= 0) {
        Angulo_0 = 0
        servos.P0.setAngle(Angulo_0)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (Pin == 1) {
        Ángulo_1 += -2
        servos.P1.setAngle(Ángulo_1)
    }
    if (Ángulo_1 <= 0) {
        Ángulo_1 = 0
        servos.P0.setAngle(Ángulo_1)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (Pin == 2) {
        Angulo_2 += -2
        servos.P2.setAngle(Angulo_2)
    }
    if (Angulo_2 <= 0) {
        Angulo_2 = 0
        servos.P2.setAngle(Angulo_2)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
let Angulo_2 = 0
let Ángulo_1 = 0
let Angulo_0 = 0
let Pin = 0
Pin = 0
Angulo_0 = 90
Ángulo_1 = 90
Angulo_2 = 90
servos.P0.setRange(0, 180)
servos.P1.setRange(0, 180)
servos.P2.setRange(0, 180)
servos.P0.setAngle(Angulo_0)
servos.P1.setAngle(Ángulo_1)
servos.P2.setAngle(Angulo_2)
basic.forever(function () {
    basic.showNumber(Pin)
})
