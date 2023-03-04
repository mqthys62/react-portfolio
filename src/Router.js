import { BrowserRouter as RouterContainer, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Accueil from './Pages/Accueil';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Portfolio from './Pages/Portfolio';
import Footer from './Components/Footer';
import Modal from './Components/Modal';



export default function Router() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <RouterContainer>
      <Navbar />
      <Routes>
        <Route path='react-portfolio/' element={<Accueil setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />} />
        <Route path='react-portfolio/contact' element={<Contact />} />
        <Route path='react-portfolio/portfolio' element={<Portfolio />} />
      </Routes>
      <Footer />
      {/* <Modal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={"Titre modal"}
        image={"img/monimage.jpg"}
        description={"Ma description"}
      /> */}
    </RouterContainer>
  )
}

