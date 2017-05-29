import Descriptor from './Descriptor'
import FACEVALUE from './faceValue'

export default class Card {
  constructor (suite, faceValue) {
    if (suite === undefined || faceValue === undefined) {
      throw new Error('Card doesn\'t have Suite or FaceValue')
    }
    const theSuite = new Descriptor(suite)
    const theFaceValue = new Descriptor(faceValue)
    this._suite = Object.freeze(theSuite)
    this._faceValue = Object.freeze(theFaceValue)
  }

  toString () {
    return ('| ' + this._suite.get() + ' ' + this._faceValue.get() + ' |')
  }

  get faceValueIndex () {
    return FACEVALUE.indexOf(this._faceValue.get())
  }
}
