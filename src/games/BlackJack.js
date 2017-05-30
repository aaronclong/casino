import Game from './Game'
import BlackJackHand from './BlackJackHand'
import UserInput from '../UserInput'

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
    if (this.turn >= this.players.length) {
      this.rounds++
      this.turn = 0
    }
    const player = this.players[this.turn]
    this.turn += 1
    if (player.name !== 'Dealer') {
      this._display.appendItem('<br/>' + player.name +
        '\'s hand <br/>' + player.hand.toString())
      const result = this._display.promptUser('Would you like to hit or stay?')
                          .then(result => this.evalResponse(result, player))
                          .catch(e => console.log(e))
      console.log(result)
    } else this.evalResponse(new UserInput('hit'), player)
  }

  evalResponse (response, player) {
    if (response.get() === 'hit') {
      player._hand.pickUp(this._deck.card)
      if (this._busted(player)) {
        this._determineWinner()
        return
      }
    }
    this.takeTurn()
  }

  _busted (player) {
    return player.hand.evaluateHand > 21
  }

  _determineWinner () {

  }

  _dealHand () {
    const hand = new BlackJackHand()
    hand.pickUp(this._deck.card)
    hand.pickUp(this._deck.card)
    return hand
  }
}
