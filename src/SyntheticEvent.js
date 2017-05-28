import DomNode from './DomNode'
import Descriptor from './Descriptor'

export default class SyntheticEvent {
  constructor (domNode, event, callBack) {
    if (domNode instanceof DomNode) {
      this.node = domNode
      this.event = new Descriptor(event)
      this.callBack = new Descriptor(callBack)
      this.subscribers = []
      this._addListener()
    } else throw new Error('Events are tied to the DOM')
  }

  _addListener () {
    this.node.node.get().addEventListener(this.event.get(), this._eventFire.bind(this))
  }

  removeListener () {
    this.node.get().removeEventListener(this.event.get(), this._eventFire.bind(this))
  }

  _eventFire () {
    // Retrieves the callBack then invokes it
    this.callBack.get()()
    this.subscribers.forEach(e => e())
  }

  subscribe (func) {
    if (typeof func === 'function') {
      this.subscribers.push(func)
    }
  }
}
