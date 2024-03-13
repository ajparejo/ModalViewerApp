import { useState } from 'react'
import { Modal } from './components/modal'
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal(!showModal)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <div className="container">
        <h1>View Modal App</h1>
        <button onClick={handleModal}>Show modal</button>
        {
          showModal ? <Modal closeModal={closeModal} body={<div>This is a text for our modal window. Hope you enjoy it!!!!</div>} /> : null
        }
      </div>
    </>
  )
}

export default App

