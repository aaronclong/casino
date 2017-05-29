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

  _getUserInput () {
    return new Promise(resolve => {
      if (this.active) {
        const guts = this.textBox.getGuts()
        return new UserInput(guts)
      }
      return new UserInput(null)
    })
  }

  async promptUser (message) {
    if (this.active) return null
    this.board.setGuts(message)
    this.active = true
    const input = this._getUserInput()
    const event = new SyntheticEvent(this.textBox,
       'keydown', () => Promise.resolve(input),
        { code: 'Enter', key: 'Enter' })
    event.subscribe(this._eventFinished(event))
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
}
