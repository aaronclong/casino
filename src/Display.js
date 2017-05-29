import DomNode from './DomNode'
import UserInput from './UserInput'

export default class Display {
  constructor () {
    this.board = new DomNode('board')
    this.textBox = new DomNode('table')
  }

  get userInput () {
    const guts = this.textBox.getGuts()
    this.textBox.setGuts('')
    return new UserInput(guts)
  }
}
