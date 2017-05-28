import Descriptor from './Descriptor'

export default class DomNode {
  constructor (element) {
    if (typeof element !== 'string') {
      throw new Error('DOM node wasn\'t specified correctly')
    }
    const node = this._makeElement(element)
    this.node = new Descriptor(node)
  }

  _makeElement (string) {
    const node = window.document.getElementById(string)
    if (node === null) {
      throw new Error('Element doesn\'t exist')
    }
    return node
  }

  addListener (event, callBack) {
    return null
  }

  /**
   * Makes DOM node and adds it to the DOM
   * as a child of the node passed in
   */
  static addDomNode (domNode, stringElement) {
    if (domNode instanceof DomNode) {
      const parser = new window.DOMParser()
      const node = parser.parseFromString(stringElement, 'text/html')
      domNode.node.get().appendChild(node.firstChild)
    }
    return null
  }
}
