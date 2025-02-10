const redux = require("redux")
const createStore = redux.createStore


// action here

const withdraw_money = "Withdraw Money"
const deposite = "deposite Money"

const withdrawmoney = ()=>{
    return {
        type:withdraw_money
    }
}
const deposite_money = ()=>{
    return {
        type:deposite
    }
}


//reducer (state,action)

const initialstate = {
    totalMoneyyouhave:10000
}

const reducer = (state=initialstate,action) => {
    switch(action.type){
        case "Withdraw Money":return{
            ...state,
            totalMoneyyouhave:state.totalMoneyyouhave-10000
        }
        case "deposite Money":return{
            ...state,
            totalMoneyyouhave:state.totalMoneyyouhave+10
        }
        default: return state
    }
}



// store code 


const store = createStore(reducer)
console.log("initial state was: ",store.getState())
store.subscribe(()=>{console.log("updated state was:", store.getState())})
store.dispatch(withdrawmoney())
store.dispatch(deposite_money())
store.dispatch(deposite_money())
store.dispatch(deposite_money())
store.dispatch(deposite_money())
store.dispatch(deposite_money())
store.dispatch(deposite_money())
store.dispatch(deposite_money())
store.dispatch(deposite_money())
