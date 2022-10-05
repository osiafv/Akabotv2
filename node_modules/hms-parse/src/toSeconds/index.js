const multipliers = {
	s: 1,
	m: 60,
	h: 3600,
}

const getMultiplier = unit => multipliers[unit.toLowerCase()]

const convert = val => {
	const numString = val.slice(0, -1)
	const num = Number(numString)

	if (Number.isNaN(num)) {
		throw new Error(`Received invalid number: ${numString}`)
	}

	const unit = val.slice(-1)
	const multiplier = getMultiplier(unit)

	if (multiplier === undefined) {
		throw new Error(`Received invalid unit: ${unit}`)
	}

	return num * multiplier
}

const sum = (a, b) => a + b

module.exports = hms => {
	if (!Array.isArray(hms)) {
		throw new Error(`Expected Array argument but received: ${hms}`)
	}

	return hms.map(convert).reduce(sum, 0)
}
