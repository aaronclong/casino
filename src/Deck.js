import Card from './Card'
import FACEVALUE from './faceValue'

export default class Deck {
  constructor () {
    this.suites = Object.freeze(['DIAMOND', 'SPADES', 'HEARTS', 'CLUBS'])
    this._deck = [53]
    this.suites.forEach(s => {
      FACEVALUE.forEach(f => this._deck.push(new Card(s, f)))
    })
    this._deck.sort(() => 0.5 - Math.random())
  }

  get card () {
    if (this._deck.length > 0) {
      return this._deck.pop()
    }
    return null
  }
}
