function createCircle() {
	incrementCircleCount()
	const radius = getRadiusByUserInput()
	const newCircle = circleComponent(radius)
	addElementToBoard(newCircle)
	updateCircleCountDisplay()
}

function circleComponent(radius) {
	if (typeof radius === 'number') {
		const circle = document.createElement('div')
		circle.id = `circle-${ApplicationState.circleCount}`
		circle.style = `width: ${radius}px; height: ${radius}px;`
		circle.className = 'circle'
		return circle
	}
}

function addElementToBoard(element) {
	const board = queryElementWithErrorHandling(
		generateIdQuerySelector(ELEMENT_IDS.BOARD),
	)
	if (typeof element === 'object') {
		board.appendChild(element)
	}
}
