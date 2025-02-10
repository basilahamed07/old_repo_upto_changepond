// const expect = require("chai").expect

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

    

})