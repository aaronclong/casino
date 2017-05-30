import DomNode from './DomNode'
import UserInput from './UserInput'
import SyntheticEvent from './SyntheticEvent'

export default class Display {
  constructor () {
    this.board = new DomNode('board')
    this.textBox = new DomNode('table')
    this.active = false
    this.textBox.node.get().disabled = true
  }

  _defineGuts () {
    const guts = this.textBox.getGuts()
    return new UserInput(guts)
  }

  _getUserInput () {
    return new Promise((resolve, reject) => {
      const resolution = function resolution () {
        if (this.active) {
          resolve(this._defineGuts())
        }
        reject(new UserInput(null))
      }
      const event = new SyntheticEvent(this.textBox,
       'keydown', resolution.bind(this),
        { code: 'Enter', key: 'Enter' })
      // Triggers DOM clean up
      event.subscribe(this._eventFinished(event))
      // Causes the Promise to resolve
      event.subscribe(Promise.resolve(this))
    })
  }

  async promptUser (message) {
    if (this.active) return null
    this.board.appendGuts('<br />' + message)
    this.active = true
    const input = this._getUserInput()
    this.textBox.node.get().disabled = false
    return input
  }

  _eventFinished (event) {
    const finishedCallBack = function finishedCallBack () {
      this.active = false
      this.textBox.setGuts('')
      this.textBox.node.get().disabled = true
      event.removeListener()
    }
    return finishedCallBack.bind(this)
  }

  appendItem (message) {
    this.board.appendGuts(message)
  }

  clearDisplay () {
    this.board.setGuts('')
  }
}
