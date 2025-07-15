import React, { useState } from 'react';
import { ExternalLink, Github, Info } from 'lucide-react';
import ProjectDetail from './ProjectDetail';

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
interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div className="group relative overflow-hidden rounded-xl bg-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 dark:bg-gray-900 dark:hover:shadow-yellow-400/10">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.images[0]} 
            alt={project.title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30 dark:opacity-70"></div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors dark:group-hover:text-yellow-400">
            {project.title}
          </h3>
          
          <p className="text-gray-600 mb-4 dark:text-gray-300">
            {project.description}
          </p>
          
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span 
                key={index} 
                className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={() => setShowDetail(true)}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-yellow-400"
              aria-label={`Ver más detalles de ${project.title}`}
            >
              <Info size={16} />
              <span>Más Info</span>
            </button>

            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-yellow-400"
                aria-label={`Ver sitio de ${project.title}`}
              >
                <ExternalLink size={16} />
                <span>Demo</span>
              </a>
            )}
            
            {project.githubUrl ? (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-yellow-400"
                aria-label={`Ver código de ${project.title} en GitHub`}
              >
                <Github size={16} />
                <span>Código</span>
              </a>
            ): (
              <p 
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-yellow-400"
              aria-label={project.title}
            >
              <Github size={16} />
              <span>Repositorio privado</span>
            </p>
            )}
          </div>
        </div>
      </div>

      {showDetail && (
        <ProjectDetail 
          project={project} 
          onClose={() => setShowDetail(false)} 
        />
      )}
    </>
  );
};

export default ProjectCard;