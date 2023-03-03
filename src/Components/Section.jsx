import React from 'react'

export default function Section() {
  return (
    <section className='section'>
      <div className="section__container">
        <div className="section__image"></div>
        <img src="../assets/pp.png" alt="" />
        <h2 className='section__title'>A propos de moi</h2>
        <p className='section__text p-top'>Bienvenue sur mon portfolio ! Je suis un développeur web et mobile passionné, spécialisé dans les technologies <span className="section__langages">ReactJS</span> et <span className="section__langages">NodeJS</span> pour la création d'applications performantes et évolutives. J'ai une solide expérience dans la création d'interfaces utilisateur réactives et dans la conception de services back-end robustes.</p>
        <p className='section__text p-bot'>En plus de mes compétences en <span className="section__langages">ReactJS</span> et <span className="section__langages">NodeJS</span>, je suis également compétent en <span className='section__langages'>JavaScript</span>, <span className='section__langages'>Html</span>, <span className="section__langages">CSS</span>,<span className="section__langages">Python</span>, <span className="section__langages">MySQL</span> et <span className="section__langages">PHP</span>, ce qui me permet de travailler sur une large gamme de projets. Je suis toujours à la recherche de nouveaux défis et de projets passionnants, alors n'hésitez pas à me contacter si vous avez besoin d'aide pour votre prochain projet de développement web ou mobile.</p>
      </div>
    </section>
  )
}
