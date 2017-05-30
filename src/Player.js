import Descriptor from './Descriptor'
import Hand from './games/Hand'

const MINIMUMBET = 20

export default class Player {
  constructor (name) {
    if (typeof name === 'string') {
      this._name = new Descriptor(name)
      this._wallet = new Descriptor(0)
      this._hand = null
    }
  }

  set wallet (num) {
    if (Number.isInteger(num)) {
      const val = this._wallet.get() + num
      this._wallet.set(val)
    }
  }

  /* Returns true if player can make bet */
  placeBet (num) {
    if (Number.isInteger(num)) {
      if (this._wallet.get() >= num && num >= MINIMUMBET) {
        const val = this._wallet.get() - num
        this._wallet.set(val)
        return true
      }
    }
    return false
  }

  get wallet () {
    return this._wallet.get()
  }

  get name () {
    return this._name.get()
  }

  get hand () {
    return this._hand
  }

  set hand (hand) {
    if (hand instanceof Hand) {
      this._hand = hand
    }
  }
}
