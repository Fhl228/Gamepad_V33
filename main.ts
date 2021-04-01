control.onEvent(EventBusSource.MICROBIT_ID_IO_P2, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    basic.showIcon(IconNames.Heart)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P2, EventBusValue.MICROBIT_PIN_EVT_PULSE_LO, function () {
    basic.showIcon(IconNames.Happy)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P2, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    basic.showIcon(IconNames.Yes)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P2, EventBusValue.MICROBIT_PIN_EVT_PULSE_HI, function () {
    basic.showIcon(IconNames.Asleep)
})
radio.setGroup(155)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullNone)
pins.setEvents(DigitalPin.P2, PinEventType.Pulse)
