basic.showIcon(IconNames.Happy)
let Direct_foot_right = 1
let Direct_foot_left = -1
let Foot_left = 90
let Foot_right = 90
let Leg_left = 0
let Leg_right = 0
pins.servoWritePin(AnalogPin.P0, Foot_right)
pins.servoWritePin(AnalogPin.P1, Leg_right)
pins.servoWritePin(AnalogPin.P2, Foot_left)
pins.servoWritePin(AnalogPin.P3, Leg_left)
basic.forever(function () {
    Foot_right += Direct_foot_right
    Foot_left += Direct_foot_left
    pins.servoWritePin(AnalogPin.P0, Foot_right)
    pins.servoWritePin(AnalogPin.P2, Foot_left)
    if (Foot_right >= 180 || Foot_right <= 0) {
        Direct_foot_right = Direct_foot_right * -1
    }
    if (Foot_left >= 180 || Foot_left <= 0) {
        Direct_foot_left = Direct_foot_left * -1
    }
})
