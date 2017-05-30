import Descriptor from './Descriptor'

/**
 * DomNode provides an access point for DOM nodes
 * to composed in other methods/functions/classes
 * @param {String} element
 */
export default class DomNode {
  constructor (element) {
    if (typeof element !== 'string') {
      throw new Error('DOM node wasn\'t specified correctly')
    }
    const node = this._makeElement(element)
    this.node = new Descriptor(node)
    this.tagAsString = this.node.get().tagName.toLowerCase()
    this.events = {}
  }

  _makeElement (string) {
    const node = window.document.getElementById(string)
    if (node === null) {
      throw new Error('Element doesn\'t exist')
    }
    return node
  }

  getGuts () {
    if (this.tagAsString.indexOf('text') >= 0) {
      return this.node.get().value
    } else {
      return this.node.get().innerHTML
    }
  }

  setGuts (text) {
    if (this.tagAsString.indexOf('text') >= 0) {
      this.node.get().value = text
    } else {
      this.node.get().innerHTML = text
    }
  }

  appendGuts (text) {
    if (this.tagAsString.indexOf('text') >= 0) {
      this.node.get().value += text
    } else {
      this.node.get().innerHTML += text
    }
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
