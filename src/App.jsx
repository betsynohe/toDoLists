/* import { useState } from 'react'
import { useFormik } from "formik"; */
import ContainerForm from './components/ContainerForm'
import ContainerTask from './components/ContainerTask'
import Header from './components/Header'
/* import Footer from './components/Footer' */


function App() {
  return (
    <>
      <Header />
      <ContainerForm />
      <ContainerTask />
      {/* <Footer /> */}
    </>
  )
}

export default App
