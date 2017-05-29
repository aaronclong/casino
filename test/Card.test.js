/* eslint-env jasmine */
import Card from '../src/Card'

describe('Testing card', () => {
  it('Card throws error on empty values', () => {
    expect(() => new Card())
         .toThrow(new Error('Card doesn\'t have Suite or FaceValue'))
  })

  it('Checking two string method', () => {
    const card = new Card('DIAMOND', 'TWO')
    expect(card.toString()).toBe('| DIAMOND TWO |')
  })

  it('Cet the Index of the Card value', () => {
    const card = new Card('DIAMOND', 'KING')
    expect(card.faceValueIndex).toBe(11)
  })
})
