import DomNode from './DomNode'

export class Display {
  static promptResponse (domNode) {
    if (domNode instanceof DomNode === false) return
    console.log(domNode)
  }
}
