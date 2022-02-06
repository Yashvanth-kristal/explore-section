import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App'
import privateMarkets from './routes/privateMarkets.jsx'
ReactDOM.render(
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="privateMarkets" element={<privateMarkets />} />
      </Routes>
    </BrowserRouter>
    
  ,
  document.getElementById('root')
)
