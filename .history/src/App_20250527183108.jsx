import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ModernShowcase from './components/ModernShowcase'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ModernShowcase />} />
      <Route path="/solutions/:challengeId" element={<ModernShowcase />} />
      <Route path="/pricing" element={<ModernShowcase />} />
      
      {/* Currency-specific routes */}
      <Route path="/UK" element={<ModernShowcase currency="GBP" />} />
      <Route path="/US" element={<ModernShowcase currency="USD" />} />
      <Route path="/EU" element={<ModernShowcase currency="EUR" />} />
      
      {/* Currency-specific pricing routes */}
      <Route path="/UK/pricing" element={<ModernShowcase currency="GBP" showPricing={true} />} />
      <Route path="/US/pricing" element={<ModernShowcase currency="USD" showPricing={true} />} />
      <Route path="/EU/pricing" element={<ModernShowcase currency="EUR" showPricing={true} />} />
      
      {/* Currency-specific solution routes */}
      <Route path="/UK/solutions/:challengeId" element={<ModernShowcase currency="GBP" />} />
      <Route path="/US/solutions/:challengeId" element={<ModernShowcase currency="USD" />} />
      <Route path="/EU/solutions/:challengeId" element={<ModernShowcase currency="EUR" />} />
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App 