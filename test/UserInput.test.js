/* eslint-env jasmine */
import UserInput from '../src/UserInput'

describe('Testing UserInput', () => {
  it('Test Safe Int Conversion', () => {
    const doubleToInt = new UserInput('12.03')
    expect(doubleToInt.toSafeInt()).toBe(12030)
  })

  it('Assert null on none number element', () => {
    const doubleToInt = new UserInput('')
    const result = doubleToInt.toSafeInt()
    expect(isNaN(result)).toBe(true)
  })
})
