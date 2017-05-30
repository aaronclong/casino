/* eslint-env jasmine */
import Hand from '../../src/games/Hand'
import Card from '../../src/Card'

describe('Testing Hand', () => {
  it('Checking two string method', () => {
    const cardOne = new Card('DIAMOND', 'TWO')
    const cardTwo = new Card('DIAMOND', 'ACE')
    const hand = new Hand()
    hand.pickUp(cardOne)
    hand.pickUp(cardTwo)
    expect(hand.evaluateHand()).toBe(13)
  })
})
