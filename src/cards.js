const mutableCards = [
  'TWO',
  'THREE',
  'FOUR',
  'FIVE',
  'SIX',
  'SEVEN',
  'EIGHT',
  'NINE',
  'TEN',
  'JACK',
  'QUEEN',
  'KING',
  'ACE'
]

// Renders the reference and the internal card state immutable
const CARDS = Object.freeze(mutableCards)

export default CARDS
