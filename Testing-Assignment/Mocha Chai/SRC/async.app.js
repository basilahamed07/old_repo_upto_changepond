// test1
console.log("Tesk_1")
// // test2
// setTimeout(()=>{
//     console.log("Task 2")
// },"1000")
//test3
console.log("Task 3")
//test4
console.log("Task 4")



function resolveAfter1second(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("resolve it")
            // console.log("resolve")
        }, 2000)
    })
}

resolveAfter1second().then(value =>{
    console.log(value)
    setTimeout( ()=>{
        Promise.resolve("resolving after 2 seconds"),500
    })
}).then(values =>{
    console.log(values)
})
