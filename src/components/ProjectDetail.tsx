import React, {
  useEffect,
  //  useRef,
  useState
} from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';

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

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const modalRef = useRef<HTMLDivElement>(null);
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

  const nextImage = () => {
    if (project && currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // // Cerrar al hacer click fuera
  // const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
  //   if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
  //     onClose();
  //   }
  // };

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="border-0 max-w-4xl max-h-[90vh] overflow-y-auto bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 new-scroll">
        {project && (
          <>
            <DialogHeader>
              <DialogTitle className="text-display text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </DialogTitle>
            </DialogHeader>

            {/* Image Gallery */}
            <div className="relative mb-6">
              <div className="aspect-video rounded-lg overflow-hidden bg-gradient-accent dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - imagen ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Navigation */}
              {project.images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm dark:bg-gray-800/80"
                    onClick={prevImage}
                    disabled={currentImageIndex === 0}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm dark:bg-gray-800/80"
                    onClick={nextImage}
                    disabled={currentImageIndex === project.images.length - 1}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-primary dark:bg-yellow-400' : 'bg-background/50 dark:bg-gray-700'}`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Descripción del proyecto</h3>
                <p className="text-muted-foreground leading-relaxed dark:text-gray-300">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Tecnologías utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 text-secondary-foreground rounded-full text-sm font-medium dark:bg-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Características principales</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 list-none dark:text-gray-300 text-muted-foreground text-sm">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2 dark:bg-yellow-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Detalles técnicos</h3>
                <ul className="space-y-2">
                  {project.technicalDetails.map((td, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2 dark:bg-yellow-400" />
                      <span className="text-muted-foreground text-sm dark:text-gray-300">{td}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4 border-t border-border dark:border-gray-700">
                <Button
                  variant="outline"
                  className="flex-1 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700">
                  <Github className="w-4 h-4 mr-2" />
                  Ver código
                </Button>
                <Button className="flex-1 text-gray-100 bg-blue-600 hover:bg-blue-500 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver demo
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
    // <div 
    // className="fixed inset-0 bg-gray-900/50 z-50 overflow-y-auto dark:bg-gray-900/95"
    // onMouseDown={handleBackdropClick}
    // >
    //   <div
    //   className="container mx-auto px-4 py-12"
    //   >
    //     <button 
    //       onClick={onClose}
    //       className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-8 dark:text-gray-400 dark:hover:text-yellow-400"
    //     >
    //       <ArrowLeft size={20} />
    //       <span>Volver a proyectos</span>
    //     </button>

    //     <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-xl dark:bg-gray-800"
    //   ref={modalRef}

    //     >
    //       <div className="relative h-[400px]">
    //         <img 
    //           src={project.image} 
    //           alt={project.title} 
    //           className="w-full h-full object-cover"
    //         />
    //         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30 dark:opacity-70"></div>
    //       </div>

    //       <div className="p-8">
    //         <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h1>

    //         <div className="flex flex-wrap gap-2 mb-6">
    //           {project.technologies.map((tech, index) => (
    //             <span 
    //               key={index}
    //               className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
    //             >
    //               {tech}
    //             </span>
    //           ))}
    //         </div>

    //         <div className="prose max-w-none mb-8">
    //           <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Descripción del Proyecto</h2>
    //           <p className="text-gray-700 dark:text-gray-300">{project.description}</p>

    //           <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Características Principales</h2>
    //           <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
    //             {project.features?.map((feature, index) => (
    //               <li key={index}>{feature}</li>
    //             ))}
    //           </ul>

    //           <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Detalles Técnicos</h2>
    //           <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
    //             {project.technicalDetails?.map((technicalDetail, index) => (
    //               <li key={index}>{technicalDetail}</li>
    //             ))}
    //           </ul>
    //         </div>

    //         <div className="flex gap-4 mt-8">
    //           {project.liveUrl && (
    //             <a 
    //               href={project.liveUrl}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300"
    //             >
    //               <ExternalLink size={18} />
    //               Ver Demo
    //             </a>
    //           )}

    //           {project.githubUrl && (
    //             <a 
    //               href={project.githubUrl}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
    //             >
    //               <Github size={18} />
    //               Ver Código
    //             </a>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProjectDetail;