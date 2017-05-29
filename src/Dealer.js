import Deck from './Deck'
import Game from './games/Game'

export default class Dealer {
  constructor () {
    this.players = []
    this.deck = new Deck()
  }

  playGame (game) {
    if (game instanceof Game) {
      game.play()
    }
  }
}
