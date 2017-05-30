import Game from './Game'
import BlackJackHand from './BlackJackHand'

export default class BlackJack extends Game {
  constructor () {
    super()
    this.turn = 0
    this.rounds = 0
  }

  play (dealer) {
    super.play(dealer)
    this._players.forEach(player => {
      player.hand = this._dealHand()
    })
    this.takeTurn()
  }

  takeTurn () {
    if (this.rounds > 5) this._determineWinner()
    if (this.turn > this.players.length) this.rounds++
    const player = this.players[this.turn]
    if (player.name !== 'dealer') {
      this._display.appendItem('<br/>' + player.name + '\'s hand <br/>' + player.hand.toString())
      this._display.promptUser('Would you like to hit or stay?')
    }
  }

  _determineWinner () {}

  _dealHand () {
    const hand = new BlackJackHand()
    hand.pickUp(this._deck.card)
    hand.pickUp(this._deck.card)
    return hand
  }
}
