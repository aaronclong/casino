import Player from '../Player'
import Dealer from '../Dealer'

export default class Game {
  constructor () {
    if (this.constructor === Game) {
      throw new TypeError('Cannot construct abstract class.')
    }
    this._players = []
    this._dealer = new Player('Dealer')
    this._dealer.wallet = 10000
    this._display = null
    this._deck = null
  }

  play (dealer) {
    if (dealer instanceof Dealer) {
      this._deck = dealer.deck
      this.players = dealer.players
      this._display = dealer.display
    }
  }

  set players (players) {
    if (players instanceof Array) {
      // slice() is used as a copy/clone mechanism
      const playerTmp = players.slice()
      playerTmp.push(this._dealer)
      this._players = Object.freeze(playerTmp)
    }
  }

  get players () {
    return this._players
  }
 }

// export const turnPromise = new Promise()
