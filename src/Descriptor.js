/**
 * The Descriptor object mimics a Python Descriptor
 * http://intermediatepythonista.com/classes-and-objects-ii-descriptors
 * The Object serves to encapsulate fields with private access
 * @param {Object} value
 */
export default function Descriptor (value) {
  this.get = () => {
    return typeof value !== 'undefined' ? value : null
  }
  this.set = newValue => {
    value = newValue
  }
}
