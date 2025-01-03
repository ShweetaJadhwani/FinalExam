import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)


store.dispatch({ type: 'Awards' })


store.dispatch(function (dispatch) {
 
  dispatch({ type: 'Award_Title' })
  dispatch({ type: 'Award_Description' })
  dispatch({ type: 'Award_Requirement' })

  setTimeout(() => {
    
    dispatch({ type: 'Awards_Progress' })
  }, 1000)
})
store.dispatch({ type: 'SHOW_Awards', text: 'These are the awards.' })
setTimeout(() => {
  store.dispatch({ type: 'HIDE_Awards' })
}, 5000)