const redux = require('redux')
const reduxLogger = require('redux-logger')

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAMS = 'BUY_ICECREAMS'

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


function buyCake(){
    return {
        type: BUY_CAKE,
        info:'First redux action'
    }
}

function buyIcecreams(){
    return {
        type: BUY_ICECREAMS,
    }
}

const cakeinitialState = {
    numOfCakes:10
}
const icecreamsinitialState = {
    numOfIcecreams:10
}

const cakesreducer = (state = cakeinitialState, action) => {
    switch(action.type){
        case BUY_CAKE:return {
            ...state,
            numOfCakes: state.numOfCakes  -1
        }

        default:
            return state
    }
}
const icecreamsreducer = (state = icecreamsinitialState, action) => {
    switch(action.type){
        case BUY_ICECREAMS:return {
            ...state,
            numOfIcecreams: state.numOfIcecreams  -1
        }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake:cakesreducer,
    iceCream:icecreamsreducer
})
const store = createStore(rootReducer,applyMiddleware(logger))

console.log('Initial State',store.getState())
const unsubscribe = store.subscribe(()=>{})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecreams())
store.dispatch(buyIcecreams())

unsubscribe()
