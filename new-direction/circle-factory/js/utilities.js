/**
 * enhance the querySelector with error handling
 */
function queryElementWithErrorHandling(selector) {
	if (typeof selector !== "string") throw Error("Invalid selector")
	const element = document.querySelector(selector)
	if (element === null) throw Error("Element not found!")
	return element
}

function generateIdQuerySelector(id) {
	return `#${id}`
}