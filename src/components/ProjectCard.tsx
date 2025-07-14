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
    <div className="relative flex flex-col justify-between bg-[#FAF3E3] rounded-2xl shadow-lg hover:shadow-2xl border border-[#F6F1EB] transition-all duration-500 overflow-hidden group w-full h-full">
      {/* Imagen con overlay */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      {/* Contenido */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-blue transition-colors duration-300 font-display">
          {project.title}
        </h3>
        <p className="text-neutral-gray mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        {/* Tecnologías */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary-blue/10 text-primary-blue border border-primary-blue/20 hover:bg-primary-blue hover:text-white transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-neutral-gray/10 text-neutral-gray">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Acciones */}
        <div className="flex items-center justify-between mt-auto">
          <button
            onClick={() => setShowDetail(true)}
            className="flex items-center gap-2 text-sm text-neutral-gray hover:text-primary-blue transition-colors duration-300 font-medium "
            aria-label={`Ver más detalles de ${project.title}`}
          >
            <Info size={16} />
            Detalles
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-gray hover:text-primary-yellow-light transition-colors duration-300 font-medium "
              aria-label={`Ver sitio de ${project.title}`}
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-gray hover:text-primary-blue transition-colors duration-300 font-medium "
              aria-label={`Ver código de ${project.title} en GitHub`}
            >
              <Github size={16} />
              Código
            </a>
          ) : (
            <span className="flex items-center gap-2 text-sm text-neutral-gray font-medium ">
              <Github size={16} />
              Privado
            </span>
          )}
        </div>
      </div>
      {showDetail && (
        <ProjectDetail
          project={project}
          onClose={() => setShowDetail(false)}
        />
      )}
    </div>
  );
};

export default ProjectCard;