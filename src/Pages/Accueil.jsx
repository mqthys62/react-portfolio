import React from 'react'
import CardPage from '../Components/CardPage'
import Header from '../Components/Header'
import Section from '../Components/Section'

export default function Accueil(props, { setIsModalOpen, isModalOpen }) {
  return (
    <>
      <Header />
      <Section />
      <CardPage setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </>
  )
}
