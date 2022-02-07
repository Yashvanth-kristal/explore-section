import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App'
import ListedAssets from './routes/ListedAssets'
import PrivateMarkets from './routes/privateMarkets.jsx'
import Elons from './routes/Elons'
import FundPortfolio from './routes/FundPortfolio'
import InstitutionalFunds from './routes/InstitutionalFunds'
import KristalPortfolios from './routes/KristalPortfolios'
import ThematicKristals from './routes/ThematicKristals'
import MutualFunds from './routes/MutualFunds'
ReactDOM.render(
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="privateMarkets" element={<PrivateMarkets />} />
      <Route path="FundPortfolio" element={<FundPortfolio />} />
      <Route path="InstitutionalFunds" element={<InstitutionalFunds />} />
      <Route path="MutualFunds" element={<MutualFunds />} />
      <Route path="Elons" element={<Elons />} />
      <Route path="KristalPortfolios" element={<KristalPortfolios />} />
      <Route path="ListedAssets" element={<ListedAssets/>} />
      <Route path="ThematicKristals" element={<ThematicKristals />} />
      <Route path="privateMarkets" element={<PrivateMarkets />} />
     
      </Routes>
    </BrowserRouter>
    
  ,
  document.getElementById('root')
)
