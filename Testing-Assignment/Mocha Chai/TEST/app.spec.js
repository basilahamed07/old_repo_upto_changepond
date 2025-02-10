const{add,sub,mul,div}=require('../SRC/app')
// const expect = require('chai').expect
const {suite, test} = require("mocha")

let expect;
(async ()=>{
    const chai = await import('chai'); // importing chai explicitly
    expect = chai.expect;
})();
//1.BDD - 'describe' and 'it'

describe('adding_suite 1', ()=>{
    it('add(2,3) should return 5 by using describe and expected',()=>{
        expect(add(2,3)).to.be.equal(5);
    })
})
describe('Subraction_suite 1', ()=>{
    it('sub(5,78) should return -73 by using describe and expected',()=>{
        expect(sub(5,78)).to.be.equal(-73);
    })
})
describe('multiplay_suite 1', ()=>{
    it('add(5,3) should return 15 by using describe and expected',()=>{
        expect(mul(5,3)).to.be.equal(15);
    })
})
describe('division_suite 1', ()=>{
    it('add(5,0) should return 0 by using describe and expected',()=>{
        expect(div(6,2)).to.be.equal(3);
    })
})





// by using the BDD context specify
context('adding_suite 1', ()=>{
    specify('add(2,3) should return 5 by using Context and specify',()=>{
        expect(add(2,3)).to.be.equal(5);
    })
})
context('Subraction_suite 1', ()=>{
    specify('sub(5,78) should return -73 by using Context and specify',()=>{
        expect(sub(5,78)).to.be.equal(-73);
    })
})
context('multiplay_suite 1', ()=>{
    specify('add(5,3) should return 15 by using Context and specify',()=>{
        expect(mul(5,3)).to.be.equal(15);
    })
})
context('division_suite 1', ()=>{
    specify('add(5,0) should return 0 by using Context and specify',()=>{
        expect(div(6,2)).to.be.equal(3);
    })
})


// by using the TDD suite and test
suite('adding_suite 1', ()=>{
    test('add(2,3) should return 5 by using suite and test',()=>{
        expect(add(2,3)).to.be.equal(5);
    })
})
suite('Subraction_suite 1', ()=>{
    test('sub(5,78) should return -73 by using suite and test',()=>{
        expect(sub(5,78)).to.be.equal(-73);
    })
})
suite('multiplay_suite 1', ()=>{
    test('add(5,3) should return 15 by using suite and test',()=>{
        expect(mul(5,3)).to.be.equal(15);
    })
})
suite('division_suite 1', ()=>{
    test('add(5,0) should return 0 by using suite and test',()=>{
        expect(div(6,2)).to.be.equal(3);
    })
})
