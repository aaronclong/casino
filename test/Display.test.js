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
    display.promptUser('Prompting user').then(result => expect(result).toBe('data'))
    global.window.document.getElementById('table').innerHTML = 'Data'
    const eventMock = new window.KeyboardEvent('keydown', { code: 'Enter', key: 'Enter' })
    global.window.document.getElementById('table').dispatchEvent(eventMock)
  })
})
