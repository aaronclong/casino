import Game from './Game'

export default class BlackJack extends Game {
  constructor (thePlayers) {
    super()
    if (thePlayers === undefined) {
      this.turn = 0
      this.players = thePlayers
    } else throw new Error('A game needs Players')
  }
}
