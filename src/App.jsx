import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Shop from './components/Shop'
import { ToastContainer } from 'react-toastify'
import { ContextProvider } from './context'

function App() {

  return (
    <>
      <ToastContainer />
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  )
}

export default App
