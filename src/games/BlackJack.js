import Game from './Game'
import BlackJackHand from './BlackJackHand'
import UserInput from '../UserInput'

export default class BlackJack extends Game {
  constructor () {
    super()
    this.turn = 0
    this.rounds = 0
    this.playing = true
  }

  play (dealer) {
    super.play(dealer)
    this._players.forEach(player => {
      player.hand = this._dealHand()
    })
    this.takeTurn()
  }

  takeTurn () {
    if (this._isPlaying()) {
      if (this.turn >= this.players.length) {
        this.rounds++
        this.turn = 0
      }
      const player = this.players[this.turn]
      this.turn += 1
      if (player.name !== 'Dealer') {
        this._display.appendItem('<br/>' + player.name +
          '\'s hand <br/>' + player.hand.toString())
        this._display.promptUser('Would you like to hit or stay?')
                    .then(result => this.evalResponse(result, player))
                    .catch(e => console.log(e))
      } else this.evalResponse(new UserInput('hit'), player)
    }
  }

  evalResponse (response, player) {
    if (response.get() === 'hit') {
      player._hand.pickUp(this._deck.card)
      if (this._busted(player)) {
        console.log('reached here')
        this._determineWinner()
        return
      }
    }
    this.takeTurn()
  }

  _busted (player) {
    this._display.appendItem('<br/> ' + player.name + ' busted')
    this.playing = !player.hand.evaluateHand > 21
    return (player.hand.evaluateHand > 21)
  }

  _determineWinner () {
    const players = this.players.filter(e => e._hand.evaluateHand() <= 21)
    console.log(players)
    this._display.appendItem('<br/> The winner is ' + players[0].name)
  }

  _isPlaying () {
    if (this.rounds > 5 || !this.playing) {
      this._determineWinner()
      return false
    }
    return true
  }

  _dealHand () {
    const hand = new BlackJackHand()
    hand.pickUp(this._deck.card)
    hand.pickUp(this._deck.card)
    return hand
  }
}
