import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Admin from '../pages/Employee'
import Client from '../pages/Ticketing'

import ClientDashboard from '../pages/ClientDashboard'
function ROuters() {
  return (
    <Routes>
        <Route path='/' element={<Admin />} />
        <Route path='/ticketing' element={<Client />} />
        
        <Route path='/clientdashboard' element={<ClientDashboard />} />
    </Routes>
  )
}

export default ROuters
