const{area_of_circle}=require('../SRC/app1')
let expect;
(async ()=>{
    const chai = await import('chai'); // importing chai explicitly
    expect = chai.expect;
})();

describe("area_of_circle suite1",()=>{
    it("area_of_circle(10) it will return the correct answer",()=>{
        expect(area_of_circle(10)).to.be.equal(314)
    })
})

