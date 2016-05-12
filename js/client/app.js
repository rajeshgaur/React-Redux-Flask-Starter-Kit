import React from 'react'
import { render } from 'react-dom'
import TestContainer from '../containers/testContainer'
import configureStore from '../stores/store'
import { Provider } from 'react-redux'

let initialState = {
 test:{
 	data:"Yella My React Redux App is on"
 }
}


let store = configureStore(initialState)

render(
  <Provider store={store}>
    <TestContainer />
  </Provider>,
  document.getElementById('app') 
)
