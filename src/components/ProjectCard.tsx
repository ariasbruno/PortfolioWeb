import React, { useState } from 'react';
import { ExternalLink, Github, Info } from 'lucide-react';
import { Project } from './Projects';
import ProjectDetail from './ProjectDetail';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div className="group relative overflow-hidden rounded-xl bg-gray-900 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-300 mb-4">
            {project.description}
          </p>
          
          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={() => setShowDetail(true)}
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-yellow-400 transition-colors"
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
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                aria-label={`Ver sitio de ${project.title}`}
              >
                <ExternalLink size={16} />
                <span>Demo</span>
              </a>
            )}
            
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                aria-label={`Ver código de ${project.title} en GitHub`}
              >
                <Github size={16} />
                <span>Código</span>
              </a>
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