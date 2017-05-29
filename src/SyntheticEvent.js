import DomNode from './DomNode'
import Descriptor from './Descriptor'

export default class SyntheticEvent {
  constructor (domNode, event, callBack, conditions = {}) {
    if (domNode instanceof DomNode) {
      this.node = domNode
      this.event = new Descriptor(event)
      this.callBack = new Descriptor(callBack)
      this.subscribers = []
      this.conditions = conditions
      this._addListener()
    } else throw new Error('Events are tied to the DOM')
  }

  _addListener () {
    this.node.node.get().addEventListener(this.event.get(), this._eventFire.bind(this))
  }

  removeListener () {
    this.node.node.get().removeEventListener(this.event.get(), this._eventFire.bind(this))
  }

  _eventFire (event) {
    if (this._isValid(event)) {
      // Retrieves the callBack then invokes it
      this.callBack.get()()
      this.subscribers.forEach(e => e())
    }
  }

  _isValid (event) {
    const keys = Object.keys(this.conditions)
    if (keys.length === 0) return true
    let validity = true
    keys.forEach(key => {
      if (this.conditions[key] !== event[key]) {
        validity = false
      }
    })
    return validity
  }

  subscribe (func) {
    if (typeof func === 'function') {
      this.subscribers.push(func)
    }
  }
}
