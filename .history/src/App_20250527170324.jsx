import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ModernShowcase from './components/ModernShowcase'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ModernShowcase />} />
      <Route path="/solutions/:challengeId" element={<ModernShowcase />} />
      <Route path="/pricing" element={<ModernShowcase />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App 