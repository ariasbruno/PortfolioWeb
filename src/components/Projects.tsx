import React from 'react';
import { Github } from 'lucide-react';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';
import projects from '../../projects.json'

type Project = {
  id: number;
  title: string;
  description: string;
  features: string[];
  technicalDetails: string[];
  images: [string];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}


const Projects: React.FC = () => {

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading title="Mis Proyectos" subtitle="Trabajos destacados" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project as Project} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/ariasbruno"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-yellow-400"
          >
            <span>Ver más proyectos en GitHub</span>
            <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;