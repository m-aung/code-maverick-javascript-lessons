const startingPoints = {
	x: 100,
	y: 50,
}

const circlePadding = 5

const ELEMENT_IDS = {
	RADIUS: 'user_input_radius',
	BUTTON: 'user_click_add',
	FORM: 'user_input_form',
	COUNTER_ID: 'circle_counter',
	COUNTER_CONTAINER: 'counter_container',
	BOARD: 'board',
}

const ApplicationState = {
	circleCount: 0,
}

/**
 * Enable button when user type some number greater than 0
 */
function enableButtonAfterInput() {
	const input = queryElementWithErrorHandling(
		generateIdQuerySelector(ELEMENT_IDS.RADIUS),
	)
	const buton = document.querySelector(
		generateIdQuerySelector(ELEMENT_IDS.BUTTON),
	)
	const parsedValue = parseFloat(input.value)

	if (parsedValue > 0) {
		buton.disabled = false
	} else {
		buton.disabled = true
	}
}

/**
 * Create circle when submit
 */
function onFormSubmit() {
	const form = document.querySelector('#user_input_form')
	form.addEventListener('submit', (event) => {
		event.preventDefault()
		createCircle()
	})
}

function showCircleCount() {
	const counter = circleCountComponent()
	const root = document.querySelector('#root')
	root.appendChild(counter)
}

function circleCountComponent() {
	const container = document.createElement('div')
	container.id = ELEMENT_IDS.COUNTER_CONTAINER
	const label = document.createElement('label')
	label.htmlFor = ELEMENT_IDS.COUNTER_ID
	label.textContent = 'Circle count:'
	const counter = document.createElement('div')
	counter.id = ELEMENT_IDS.COUNTER_ID
	counter.textContent = ApplicationState.circleCount
	container.appendChild(label)
	container.appendChild(counter)
	return container
}

function updateCircleCountDisplay() {
	const counter = document.querySelector(
		generateIdQuerySelector(ELEMENT_IDS.COUNTER_ID),
	)
	counter.textContent = ApplicationState.circleCount
}

function incrementCircleCount() {
	ApplicationState.circleCount += 1
}

function getRadiusByUserInput() {
	const radius = queryElementWithErrorHandling(
		generateIdQuerySelector(ELEMENT_IDS.RADIUS),
	).value
	return parseFloat(radius)
}
