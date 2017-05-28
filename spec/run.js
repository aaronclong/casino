import Jasmine from 'jasmine'
import fs from 'fs'

// Creating shared instance of the index.html for JSDOM
global.indexFile = fs.readFileSync(process.cwd() + '/public/index.html').toString()
const jasmine = new Jasmine()
jasmine.loadConfigFile('spec/support/jasmine.json')
jasmine.execute()
