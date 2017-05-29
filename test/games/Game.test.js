/* eslint-env jasmine */
import Game from '../../src/games/Game'

describe('Confirming that Game is abstract', () => {
  it('Catch Error with creating and instance of Game', () => {
    expect(e => new Game())
         .toThrow(new TypeError('Cannot construct abstract class.'))
  })
})
