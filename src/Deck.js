export default class Deck {
  constructor () {
    this.suites = Object.freeze(['DIAMOND', 'SPADES', 'HEARTS', 'CLUBS'])
    this.deck = []
  }
}
