import BlackJack from './games/BlackJack'
import Dealer from './Dealer'
import Display from './Display'
import Player from './Player'

const display = new Display()
const dealer = new Dealer(display)
dealer.players.push(new Player('Aaron'))
const blackJack = new BlackJack()
dealer.playGame(blackJack)
