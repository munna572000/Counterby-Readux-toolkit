import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import store from './components/store'
import { Provider } from 'react-redux'


const App = () => {
  return (
    <>
    <Provider store={store}>
       <About/>
    </Provider>
   
    </>
    )

}

export default App