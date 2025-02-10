const {suite,test,setup,teardown,suiteSetup,suiteTeardown} = require("mocha")

suite("TDD Hooks", ()=>{
    suiteSetup(() =>{
        console.log("One Suitesetup")
    })
    suiteTeardown(() =>{
        console.log("One suiteTeardown")
    })
    setup(() =>{
        console.log("One setup")
    })
    teardown(() =>{
        console.log("One teardown")
    })

    test("This was checkin the TDD Hooks", ()=>{
        console.log("Testing Good")
    })
})