/* import { useState } from 'react'
import { useFormik } from "formik"; */
import ContainerForm from './components/ContainerForm'
import Header from './components/Header'
import ListTask from './components/ListTask'
/* import Footer from './components/Footer' */


function App() {
  return (
    <>
      <Header />
      <ContainerForm />
      <ListTask />
      {/* <Footer /> */}
    </>
  )
}

export default App
