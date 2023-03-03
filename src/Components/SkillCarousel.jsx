import React from 'react';
import Carousel from './Carousel'; // Importer le composant Carousel

const SkillCarousel = ({ skills }) => {
  return (
    <Carousel
      slides={skills.map((skill, index) => (
        <div key={index}>
          <h2>{skill.title}</h2>
          <img src={skill.image} alt={skill.title} />
          <p>{skill.description}</p>
        </div>
      ))}
    />
  );
};

export default SkillCarousel;