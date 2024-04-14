import { Card } from 'antd';
import React from 'react';

interface Prop {
  name: string;
  src: string;
  techs: string[];
}

const projects: Prop[] = [
  {
    name: 'Dice game 🎲',
    src: 'https://dice-game-app-v1.netlify.app',
    techs: ['React', 'Tailwind']
  },
  {
    name: 'figma in react',
    src: 'https://unrivaled-bunny-7b4c8f.netlify.app',
    techs: ['React', 'Tailwind']
  },
  {
    name: 'Learning language',
    src: 'https://learninglanguagee.netlify.app/',
    techs: ['Next', 'MUI', 'Ant Design']
  },
  {
    name: 'sudoku',
    src: 'https://sudoku-app-v1.netlify.app/',
    techs: ['React', 'Tailwind']
  }
];

export const Projects: React.FC = () => {
  return (
    <div id="projects" className="transition-all section flex flex-col justify-center">
      <div className="text-center font-bold text-4xl pb-10">My deployed project</div>
      <div className="flex flex-wrap justify-center gap-5">
        {projects.map((project: Prop) => (
          <a href={project.src} target="_blank" data-aos="zoom-in" rel="noopener noreferrer">
            <Card
              title={project.name}
              className="bg-gradient-to-r from-cyan-200 h-[200px] to-blue-200  shadow-lg w-[300px] md:w-[250px]  hover:scale-110	 transition-transform duration-500 "
            >
              {project.techs.map((tech: string) => (
                <p>{tech}</p>
              ))}
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};
