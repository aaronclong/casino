import DomNode from './DomNode'

export class Display {
  constructor () {
    this.inputBox = new DomNode('table')
    this.messagBoard = new DomNode('board')
  }
}
