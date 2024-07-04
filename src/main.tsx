import React from 'react'
import ReactDOM from 'react-dom/client'
import { TrucoCounter } from './containers/TrucoCounter/trucoCounter'
import './styles/global.css'
import Header from './containers/Header/headerUpTop'
import { Pezinho } from './containers/Footer/pezinho'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <TrucoCounter name='1'/>
    <TrucoCounter name='2'/>
    <Pezinho />
  </React.StrictMode>,
)
