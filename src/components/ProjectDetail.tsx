import React, { useEffect, useRef } from 'react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Project } from './Projects';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

    // Cerrar con Escape
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);
  
    // Cerrar al hacer click fuera
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

  return (
    <div 
    className="fixed inset-0 bg-gray-900/95 z-50 overflow-y-auto"
    onMouseDown={handleBackdropClick}
    >
      <div
      className="container mx-auto px-4 py-12"
      >
        <button 
          onClick={onClose}
          className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Volver a proyectos</span>
        </button>

        <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-xl"
      ref={modalRef}
        
        >
          <div className="relative h-[400px]">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full bg-gray-700 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none mb-8">
              <h2 className="text-xl font-semibold mb-4">Descripción del Proyecto</h2>
              <p className="text-gray-300">{project.description}</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Características Principales</h2>
              <ul className="list-disc pl-6 text-gray-300">
                {project.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">Detalles Técnicos</h2>
              <ul className="list-disc pl-6 text-gray-300">
                {project.technicalDetails?.map((technicalDetail, index) => (
                  <li key={index}>{technicalDetail}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 mt-8">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
                >
                  <ExternalLink size={18} />
                  Ver Demo
                </a>
              )}
              
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-gray-100 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                >
                  <Github size={18} />
                  Ver Código
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;