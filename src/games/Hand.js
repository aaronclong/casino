import Card from '../Card'

export default class Hand {
  constructor () {
    this.hand = []
  }

  pickUp (card) {
    if (card instanceof Card) {
      this.hand.push(card)
    }
  }

  evaluateHand () {
    return 0
  }

  _evaluateCard (card) {
    const value = card.faceValue
    if (value > 0) console.log('hey')
  }
}
