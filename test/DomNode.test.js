/* eslint-env jasmine */
import { JSDOM } from 'jsdom'
import DomNode from '../src/DomNode'

describe('DomNode Construction', () => {
  beforeAll(() => {
    /* Creates a mock DOM for test */
    const DOM = new JSDOM(global.indexFile)
    global.window = DOM.window
  })

  afterAll(() => {
    global.window.close()
  })

  it('Confirming that DomNode can capute existing nodes', () => {
    const app = new DomNode('app')
    expect(app.node.get()).toBe(window.document.getElementById('app'))
  })

  it('DomNode throws error on none String', () => {
    expect(() => new DomNode({}))
         .toThrow(new Error('DOM node wasn\'t specified correctly'))
  })

  it('DomNode throws error on none String', () => {
    expect(() => new DomNode('random'))
         .toThrow(new Error('Element doesn\'t exist'))
  })

  it('DomNode check addDomNode', () => {
    const app = new DomNode('app')
    DomNode.addDomNode(app, '<h2 id=\'test\'>New Element<h2>')
    expect(global.window.document.getElementById('test').innerHTML)
         .toBe('New Element')
  })
})
