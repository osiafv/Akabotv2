const SECONDS_PER_HOUR = 3600
const SECONDS_PER_MINUTE = 60

const padNum = num => String(num).padStart(2, '0')

module.exports = seconds => {
	if (typeof seconds !== 'number') {
		throw new Error(`Expected argument of type number but received: ${seconds}`)
	}

	const hours = Math.floor(seconds / SECONDS_PER_HOUR)
	let secondsLeft = seconds % SECONDS_PER_HOUR
	const minutes = Math.floor(secondsLeft / SECONDS_PER_MINUTE)
	secondsLeft %= SECONDS_PER_MINUTE

	if (hours) {
		return `${hours}:${padNum(minutes)}:${padNum(secondsLeft)}`
	}

	if (minutes) {
		return `${minutes}:${padNum(secondsLeft)}`
	}

	return `${secondsLeft}s`
}
