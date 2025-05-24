import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

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
}

const projects: Project[] = [
  {
    id: 1,
    title: "Rincón Casero",
    description: "Este es un proyecto web moderno para una pizzeria, con funcionalidades para mostrar menú, gestionar pedidos y carrito de compras.",
    features: [
      "Información Accesible sobre el Local",
      "Filtrado de menu por categoría",
      "Sistema de pedidos en línea",
      "Carrito de compras",
      "Personalización de Pedidos",
      "Generación automática de pedido para enviar a WhatsApp",
      "Facilidad para Contactar",
    ],
    technicalDetails: [
      "Next.js 14.1.0",
      "React 18.2.0",
      "TypeScript",
      "Tailwind CSS para estilos",
      "Radix UI para componentes de interfaz",
      "Zustand para manejo de estado",
      "Supabase (para backend y base de datos)",
      "Resend (para envío de emails)",
      "Vercel Analytics y Speed Insights para monitoreo",
      "Zod para validación de formularios",
    ],
    image: "/rincon-casero-home.png",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    liveUrl: "https://rinconcasero.com.ar/",
    githubUrl: "https://github.com/ariasbruno/RinconCasero-public"
  },
  {
    id: 1,
    title: "QuickNotes",
    description: "QuickNotes, mi primer proyecto web, es una eficiente aplicación de notas 100% Vanilla JS (HTML/CSS/JS). Permite crear, editar y gestionar apuntes fácilmente, sin librerías externas.",
    features: [
      "Ordenar notas (en columna o lista)",
      "Sistema de papelera",
      "Modo de solo lectura",
      "Cambio entre tema claro y oscuro",
      "Configuraciones personalizables",
      "Preferencias de usuario guardadas",
      "Barra lateral para navegación",
      "Barra de herramientas para edición",
      "Tooltips informativos",
      "Guardado automático",
      "Confirmaciones antes de eliminar",
      "Opción de deshacer acciones",
      "Interfaz responsiva",
    ],
    technicalDetails: [
      "Frontend puro con HTML5, CSS3 y JavaScript",
      "Almacenamiento local usando localStorage",
      "Diseño modular con separación de componentes",
      "Sistema de temas claro/oscuro",
      "Editor de texto enriquecido con barra de herramientas (con execCommand)",
      "Manejo de temas con animaciones SVG",
      "Sistema de alertas y confirmaciones",
      "Gestión de modales y sidebars",
    ],
    image: "/QuickNotes.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ariasbruno.github.io/QuickNotes/",
    githubUrl: "https://github.com/ariasbruno/QuickNotes"
  },
];

const Projects: React.FC = () => {

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading title="Mis Proyectos" subtitle="Trabajos destacados" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/ariasbruno"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
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