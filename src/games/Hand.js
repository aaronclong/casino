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
    let total = 0
    this.hand.forEach(card => {
      total += this._evaluateCard(card)
    })
    return total
  }

  _evaluateCard (card) {
    const value = card.faceValueIndex
    if (value > 11) return 11
    else if (value > 8) return 10
    else return value + 2
  }

  toString () {
    let string = ''
    this.hand.forEach(card => { string += (card.toString() + '<br/>') })
    return string
  }
}
