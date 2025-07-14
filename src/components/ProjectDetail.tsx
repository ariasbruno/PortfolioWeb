import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Github } from 'lucide-react';
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

  const modal = (
    <div 
      className="fixed inset-0 z-[9999] bg-[#FAF3E3]/80 backdrop-blur-md px-2 py-8 overflow-y-auto"
      onMouseDown={handleBackdropClick}
    >
      <div
        className="relative w-full container m-auto max-w-4xl bg-[#FAF3E3] rounded-2xl shadow-2xl border border-[#F6F1EB] overflow-hidden flex flex-col"
        ref={modalRef}
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#FFF8E1] hover:bg-primary-yellow transition-colors shadow"
          aria-label="Cerrar"
        >
          <X size={22} className="text-[#3B2F2F]" />
        </button>
        {/* Imagen */}
        <div className="relative h-56 sm:h-72 md:h-80 w-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-[#3B2F2F]/30 rounded-t-2xl" />
        </div>
        {/* Contenido */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-neutral-black mb-2 font-display">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-semibold border border-primary-blue/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-6 text-neutral-gray">
            <div>
              <h2 className="text-lg font-semibold text-neutral-black mb-2">Descripción</h2>
              <p>{project.description}</p>
            </div>
            {project.features && project.features.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-neutral-black mb-2">Características Principales</h2>
                <ul className="list-disc pl-6 space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.technicalDetails && project.technicalDetails.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-neutral-black mb-2">Detalles Técnicos</h2>
                <ul className="list-disc pl-6 space-y-1">
                  {project.technicalDetails.map((technicalDetail, index) => (
                    <li key={index}>{technicalDetail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary-yellow text-[#3B2F2F] rounded-xl font-semibold hover:bg-primary-yellow-dark transition-colors shadow"
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
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary-blue text-white rounded-xl font-semibold hover:bg-primary-blue/80 transition-colors shadow"
              >
                <Github size={18} />
                Ver Código
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  return typeof window !== 'undefined' ? createPortal(modal, document.body) : null;
};

export default ProjectDetail;