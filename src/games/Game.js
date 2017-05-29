import Player from '../Player'

export default class Game {
  constructor () {
    if (this.constructor === Game) {
      throw new TypeError('Cannot construct abstract class.')
    }
    this._players = []
    this._dealer = new Player('Dealer')
    this._dealer.wallet = 10000
  }

  play () {}

  set players (players) {
    if (players instanceof Array) {
      // slice() is used as a copy/clone mechanism
      this._players = Object.freeze(players.slice().push(this._dealer))
    }
  }

  get players () {
    return this._players
  }
 }

export const turnPromise = new Promise()
