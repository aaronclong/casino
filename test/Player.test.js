/* eslint-env jasmine */

import Player from '../src/Player'

describe('Testing Player methods', () => {
  let player
  beforeEach(() => {
    player = new Player('Aaron')
  })

  it('Testing adding double to waller', () => {
    player.wallet = 201.30
    expect(player.wallet).toBe(0)
  })

  it('Testing adding double to waller', () => {
    player.wallet = 100
    expect(player.wallet).toBe(100)
  })

  it('Confirming minimum bet reject on low funds', () => {
    player.wallet = 15
    expect(player.placeBet(8)).toBe(false)
  })

  it('Confirming minimum valid bet', () => {
    player.wallet = 20
    expect(player.placeBet(20)).toBe(true)
  })
})
