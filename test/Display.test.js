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
    global.window.document.getElementById('table').innerHTML = 'Data'
    const display = new Display()
    expect(display.userInput.get()).toBe('data')
  })
})
