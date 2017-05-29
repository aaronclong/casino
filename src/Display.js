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

  userInput () {
    if (this.active) {
      const guts = this.textBox.getGuts()
      this.textBox.setGuts('')
      // this.textBox.node.get().disabled = true
      return new UserInput(guts)
    }
    return new UserInput(null)
  }

  async promptUser (message) {
    this.board.setGuts(message)
    this.active = true
    const eventFinished = function (event) {
      this.active = false
      this.textBox.node.get().disabled = true
    }
    const event = new SyntheticEvent(this.textBox,
       'keydown', this.userInput.bind(this), { code: 'Enter', key: 'Enter' })
    event.subscribe(eventFinished.bind(this))
    this.textBox.node.get().disabled = false
  }

  appendItem (message) {
    this.board.appendGuts(message)
  }
}
