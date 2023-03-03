import React from 'react';
import SkillCarousel from './SkillCarousel'; // Importer le composant SkillCarousel


export default function Carousel() {
  const skills = [
    {
      title: 'Skill 1',
      image: 'https://via.placeholder.com/300x200',
      description: 'Description for skill 1'
    },
    {
      title: 'Skill 2',
      image: 'https://via.placeholder.com/300x200',
      description: 'Description for skill 2'
    },
    {
      title: 'Skill 3',
      image: 'https://via.placeholder.com/300x200',
      description: 'Description for skill 3'
    },
    {
      title: 'Skill 4',
      image: 'https://via.placeholder.com/300x200',
      description: 'Description for skill 4'
    }
  ];
  return (
    <div>
      <SkillCarousel skills={skills} />
    </div>
      )
}

