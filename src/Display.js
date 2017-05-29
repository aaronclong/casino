import DomNode from './DomNode'
import UserInput from './UserInput'

export default class Display {
  constructor () {
    this.board = new DomNode('board')
    this.textBox = new DomNode('table')
    this.active = false
    this.textBox.node.get().disabled = true
  }

  get userInput () {
    if (this.active) {
      const guts = this.textBox.getGuts()
      this.textBox.setGuts('')
      this.textBox.node.get().disabled = true
      return new UserInput(guts)
    }
    return new UserInput(null)
  }

  promptUser (message) {
    this.board.setGuts(message)
    this.active = true
    this.textBox.node.get().disabled = false
  }

  appendItem (message) {
    this.board.appendGuts(message)
  }
}
