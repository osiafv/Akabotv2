const fromSeconds = require('.')

describe('fromSeconds', () => {
	test('Return correct time string', () => {
		const timeString = fromSeconds(13510)

		expect(timeString).toBe('3:45:10')
	})

	test(`Return time string with 's' unit when seconds is less than 60`, () => {
		const timeString = fromSeconds(59)

		expect(timeString).toBe('59s')
	})

	test('Return time string with zero-padded minutes and seconds', () => {
		const timeString = fromSeconds(3905)

		expect(timeString).toBe('1:05:05')
	})

	test('Throw on invalid argument type', () => {
		expect(() => fromSeconds('')).toThrow()
		expect(() => fromSeconds([])).toThrow()
		expect(() => fromSeconds({})).toThrow()
	})
})
