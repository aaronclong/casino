import Hand from './Hand'

export default class BlackJackHand extends Hand {
  evaluateHand () {
    let handValue = super.evaluateHand()
    if (handValue > 16 && this._hasAce()) {
      handValue -= 10
    }
    return handValue
  }

  _hasAce () {
    let assertion = false
    this.hand.forEach(card => {
      if (card.faceValueIndex === 12) assertion = true
    })
    return assertion
  }
}
