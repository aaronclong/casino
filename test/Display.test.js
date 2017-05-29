/* eslint-env jasmine */
import { JSDOM } from 'jsdom'
import Display from '../src/Display'

describe('Testing Display Modules', () => {
  beforeAll(() => {
    /* Creates a mock DOM for test */
    const DOM = new JSDOM(global.indexFile)
    global.window = DOM.window
  })

  afterAll(() => {
    global.window.close()
  })

  it('Testing capturing user input', () => {
    const display = new Display()
    display.promptUser('Prompting user')
    global.window.document.getElementById('table').innerHTML = 'Data'
    expect(display.userInput.get()).toBe('data')
  })
})
