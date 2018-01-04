import {expect} from 'chai';
import {JSDOM} from 'jsdom';
import fs from 'fs';

describe ('Firt test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', () => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    const dom  = new JSDOM(index);
    const document = dom.window.document;

    const h1 = document.querySelector('h1');
    expect(h1.innerHTML).to.equal('Node is up');
    dom.window.close();
  });
});
