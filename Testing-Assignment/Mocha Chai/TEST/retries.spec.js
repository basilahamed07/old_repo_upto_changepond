// const expect = require("chai").expect
const axios = require("axios")

let expect;
(async ()=>{
    const chai = await import('chai'); // importing chai explicitly
    expect = chai.expect;
})();

describe("Test suite 1", function(){
    this.retries(3); // retry all test in this suite lines
    it("Promised based way for retries",function(){
        this.retries(6)
        return axios.get("http://localhost:8888/users").then(res =>{
            expect(res.data[1].useremail).to.be.equal("siva123@gmail.com")
            // expect(res.data[1].carname).to.be.equal("suzuki-nexa")
            // expect(res.data[1].username).to.be.equal("tempuser")
            // expect(res.data[1].password).to.be.equal("1234567890")
            // expect(res.data[1].carprice).to.be.equal("34567")

        }).catch(err =>{
            console.log("error during test:",err)
            throw err;
        })



    })
})