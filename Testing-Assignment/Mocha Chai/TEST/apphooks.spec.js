// const expect = require("chai").expect
const{add,sub,mul,div}=require('../SRC/app')
let expect;
(async ()=>{
    const chai = await import('chai'); // importing chai explicitly
    expect = chai.expect;
})();

describe("hooksuites_1" ,()=>{
    before(()=>{
        console.log("Before Hook")
    })

    after(()=>{
        console.log("After Hook")
    })


    beforeEach(()=>{
        console.log("BeforeEach Hook")
    })

    afterEach(()=>{
        console.log("AfterEach Hook")
    })

    //RUN AFTER THE BEFORE EACH
    context('division_suite 1', ()=>{
        specify('add(5,0) should return 0 by using Context and specify',()=>{
            expect(div(6,2)).to.be.equal(3);
        })
    })
   
    //RUN AFTER THE BEFORE EACH
    describe('Subraction_suite 1', ()=>{
        it('sub(5,78) should return -73 by using describe and expected',()=>{
            expect(sub(5,78)).to.be.equal(-73);
        })
    })


})



