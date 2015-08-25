/*
 * http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
 */
(function (getWindowSize) {

	if (typeof exports === 'object') {
		module.exports = getWindowSize
	} else {
		window.getWindowSize = getWindowSize
	}

})(function () {

	var viewportwidth
	var viewportheight

	if (typeof window.innerWidth != 'undefined') {
		viewportwidth = window.innerWidth
		viewportheight = window.innerHeight
	}
	else if (
		typeof document.documentElement != 'undefined' &&
		typeof document.documentElement.clientWidth != 'undefined' &&
		document.documentElement.clientWidth != 0) {
		viewportwidth = document.documentElement.clientWidth
		viewportheight = document.documentElement.clientHeight
	}
	else {
		var body = document.getElementsByTagName('body')[0]
		viewportwidth = body.clientWidth
		viewportheight = body.clientHeight
	}

	return {
		width: viewportwidth,
		height: viewportheight
	}
})
