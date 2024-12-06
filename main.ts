input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(1)
    radio.sendValue("name", 4)
})
radio.onReceivedValue(function (name, value) {
    basic.showNumber(value)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
	
})
