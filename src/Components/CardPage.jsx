import React, { useState } from 'react'
import Card from './Card'


export default function CardPage(props, {setIsModalOpen, isModalOpen}) {

    const [cards, setCards] = useState([
        { title: "Formulaire", description: "Thême pizzeria | HTML/CSS/JS" },
        { title: "Page d'accueil", description: "Reproduction de maquette | HTML/CSS" },
        { title: "Page d'accueil", description: "Reproduction de maquette | HTML/CSS" },
    ])
    return (
        <div className='card__container'>
            <div className='card__container__titles'>
                <h2 className='card__container__title'>Mes projets</h2>
                <h3 className="card__container__subtitle">(Portfolio)</h3>
            </div>
            {cards.map((card, index) => {
                return <Card setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} key={index} title={card.title} imageSource={card.imageSource} description={card.description} />
            })}
        </div>
    )
}
