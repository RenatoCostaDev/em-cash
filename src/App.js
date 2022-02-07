import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import AppProvider from './provider/AppProvider'
import Home from './componets/Home'
import Rectangle from './componets/Rectangle'
import Triangle from "./componets/Triangle";
import Total from './componets/Total'

function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route path="/rectangle" render={(props) => (
      <AppProvider>
        <Rectangle {...props}/>
      </AppProvider> 
    )}/>
    <Route path="/triangle" render={(props) => (
      <AppProvider>
        <Triangle {...props}/>
      </AppProvider>
    )}/>
    <Route path="/total" render={(props) => (
      <AppProvider>
        <Total {...props}/>
      </AppProvider>
    )}/>
    </BrowserRouter>
  )
}

export default App