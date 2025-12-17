import React from 'react'
import { RecoilRoot } from 'recoil'
import AuthPage from './components/pages/AuthPage'

const App = () => {
  return (
    <RecoilRoot>
    <AuthPage />
    </RecoilRoot>
  )
}

export default App