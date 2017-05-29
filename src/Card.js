import Descriptor from './Descriptor'

export default class Card {
  constructor (suite, faceValue) {
    if (suite === undefined || faceValue === undefined) {
      throw new Error('Card doesn\'t have Suite or FaceValue')
    }
    const theSuite = new Descriptor(suite)
    const theFaceValue = new Descriptor(faceValue)
    this.suite = Object.freeze(theSuite)
    this.faceValue = Object.freeze(theFaceValue)
  }

  toString () {
    return ('| ' + this.suite.get() + ' ' + this.faceValue.get() + ' |')
  }
}
