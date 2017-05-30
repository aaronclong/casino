/* eslint-env jasmine */
import BlackJackHand from '../../src/games/BlackJackHand'
import Card from '../../src/Card'

describe('Testing Hand', () => {
  it('Checking two string method', () => {
    const cardOne = new Card('DIAMOND', 'TWO')
    const cardTwo = new Card('DIAMOND', 'ACE')
    const cardThree = new Card('SPADES', 'ACE')
    const hand = new BlackJackHand()
    hand.pickUp(cardOne)
    hand.pickUp(cardTwo)
    hand.pickUp(cardThree)
    expect(hand.evaluateHand()).toBe(14)
  })
})
