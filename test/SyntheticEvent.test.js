/* eslint-env jasmine */
import { JSDOM } from 'jsdom'
import DomNode from '../src/DomNode'
import SyntheticEvent from '../src/SyntheticEvent'
import Descriptor from '../src/Descriptor'

describe('DomNode Construction', () => {
  const testMacros = {}
  beforeAll(() => {
    /* Creates a mock DOM for test */
    const DOM = new JSDOM(global.indexFile)
    global.window = DOM.window
    const app = new DomNode('promptHeader')
    const eventMock = new window.Event('click')
    const event = new SyntheticEvent(app, 'click', () => app.setGuts('Event Handler'))
    testMacros['event'] = event
    testMacros['testOne'] = new Descriptor(1)
    testMacros['testTwo'] = new Descriptor(2)
    testMacros['testThree'] = new Descriptor(3)
    const increment = (descriptor) => {
      return () => {
        let val = descriptor.get() + 1
        descriptor.set(val)
      }
    }
    event.subscribe(increment(testMacros.testOne))
    event.subscribe(increment(testMacros.testTwo))
    event.subscribe(increment(testMacros.testThree))
    global.window.document.getElementById('promptHeader').dispatchEvent(eventMock)
  })

  afterAll(() => {
    global.window.close()
  })

  it('Testing click event', () => {
    expect(global.window
            .document.getElementById('promptHeader').innerHTML)
               .toBe('Event Handler')
  })

  it('Testing subscribers', () => {
    expect(testMacros.testOne.get()).toBe(2)
    expect(testMacros.testTwo.get()).toBe(3)
    expect(testMacros.testThree.get()).toBe(4)
  })

  it('Testing event with conditions', () => {
    const table = new DomNode('table')
    const event = new SyntheticEvent(table,
           'keydown', () => table.setGuts('Conditions'),
            { 'code': 'Enter' })
    const eventMock = new window.KeyboardEvent('keydown', { code: 'Enter', key: 'Enter' })
    global.window.document.getElementById('table').dispatchEvent(eventMock)
    expect(global.window
            .document.getElementById('table').value)
               .toBe('Conditions')
  })

  it('Testing event without proper conditions', () => {
    const table = new DomNode('table')
    const event = new SyntheticEvent(table,
           'keydown', () => table.setGuts('More Conditions'),
            { 'code': 'Enter' })
    const eventMock = new window.KeyboardEvent('keydown')
    global.window.document.getElementById('table').dispatchEvent(eventMock)
    expect(global.window
            .document.getElementById('table').innerHTML === 'More Conditions')
               .toBeFalsy()
  })
})
