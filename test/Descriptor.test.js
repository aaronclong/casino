/* eslint-env jasmine */

import Descriptor from '../src/Descriptor'

describe('Confirming private field', () => {
  it('Confirm getter', () => {
    const privateField = new Descriptor('data')
    expect(privateField.get()).toBe('data')
  })

  it('Confirm setter', () => {
    const privateField = new Descriptor('data')
    privateField.set('more data')
    expect(privateField.get()).toBe('more data')
  })

  it('Confirm is private', () => {
    const privateField = new Descriptor()
    expect(privateField.get()).toBe(null)
  })
})
