import { Github } from 'lucide-react';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';
import projectsJSON from '../../projects.json'

export interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  technicalDetails: string[];
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = projectsJSON;

export default function Projects() {

  return (
    <section id="projects" className="pt-28 bg-[#FAF3E3] section-pattern relative">
      {/* Elementos decorativos de fondo */}
      <span className="absolute top-10 left-10 w-6 h-6 bg-primary-blue/10 rounded-full animate-float"></span>
      <span className="absolute bottom-20 right-10 w-4 h-4 bg-primary-yellow/10 rounded-full animate-bounce-gentle"></span>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Mis Proyectos" 
          subtitle="Trabajos destacados" 
        />

        {/* Proyectos destacados */}
        <div className="mb-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA para GitHub */}
        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/ariasbruno"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-neutral-gray hover:text-primary-blue transition-colors px-8 py-4 font-medium"
          >
            Mi repositorio
            <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};