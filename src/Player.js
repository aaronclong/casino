import Descriptor from './Descriptor'

const MINIMUMBET = 20

export default class Player {
  constructor (name) {
    if (typeof name === 'string') {
      this._name = new Descriptor(name)
      this._wallet = new Descriptor(0)
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
}
