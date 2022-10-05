const toSeconds = require('.')

describe('toSeconds', () => {
	test('Return correct number of seconds', () => {
		const hms = ['3h', '45m', '10s']
		const seconds = toSeconds(hms)

		expect(seconds).toBe(3 * 3600 + 45 * 60 + 10)
	})

	test('Return zero for empty input', () => {
		expect(toSeconds([])).toBe(0)
	})

	test('Accept zero time values', () => {
		const hms = ['0h', '0m', '0s']
		const seconds = toSeconds(hms)

		expect(seconds).toBe(0)
	})

	test('Accept uppercase units', () => {
		const hms = ['10H', '5M', '30S']
		const seconds = toSeconds(hms)

		expect(seconds).toBe(10 * 3600 + 5 * 60 + 30)
	})

	test('Throw on invalid argument type', () => {
		expect(() => toSeconds('')).toThrow()
		expect(() => toSeconds(1)).toThrow()
		expect(() => toSeconds({})).toThrow()
	})

	test('Throw on invalid number', () => {
		const arg = ['oneh']

		expect(() => toSeconds(arg)).toThrow()
	})

	test('Throw on invalid unit', () => {
		const arg = ['1d']

		expect(() => toSeconds(arg)).toThrow()
	})
})
