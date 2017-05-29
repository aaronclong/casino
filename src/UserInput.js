/**
 * UserInput is an immutable Object
 * used to store, pass, and format
 * information from the user
 * @param {String} input
 */
export default function UserInput (input) {
  this.get = () => {
    return (typeof input === 'string') ? input.toLowerCase() : input
  }
  this.toSafeInt = () => {
    const safe = parseFloat(input) * 1000
    return Math.floor(safe)
  }
}
