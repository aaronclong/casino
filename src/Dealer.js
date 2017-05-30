import Deck from './Deck'
import Game from './games/Game'
import Display from './Display'

export default class Dealer {
  constructor (display) {
    if (display instanceof Display) {
      this.players = []
      this.deck = new Deck()
      this.display = display
      console.log(this.display)
    }
  }

  playGame (game) {
    if (game instanceof Game) {
      game.play(this)
    }
  }
}
