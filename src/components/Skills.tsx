import SectionHeading from './SectionHeading';
import { CSS, HTML5, JavaScript, MySQL, Nextjs, Nodejs, Python, TailwindCSS, TypeScript, ReactIcon } from './ui/skill-icons';
import { BookOpen, Zap } from 'lucide-react';

interface Skill {
  name: string;
  icon: JSX.Element;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  isLearning?: boolean;
  icon?: JSX.Element;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Tecnologías",
    skills: [
      { name: "HTML", icon: <HTML5/> },
      { name: "CSS", icon: <CSS/> },
      { name: "JavaScript", icon: <JavaScript/> },
      { name: "React", icon: <ReactIcon/> },
      { name: "Tailwind CSS", icon: <TailwindCSS/> },
      { name: "Next.js", icon: <Nextjs/> },
      { name: "Node.js", icon: <Nodejs/> },
      { name: "TypeScript", icon: <TypeScript/> },
    ],
    icon: <Zap size={24} />
  },
  {
    title: "En Aprendizaje",
    skills: [
      { name: "SQL", icon: <MySQL/> },
      { name: "Python", icon: <Python/> },
      { name: "React Native", icon: <ReactIcon/> },
    ],
    isLearning: true,
    icon: <BookOpen size={24} />
  }
];

// Elimino los colores y leyendas de nivel en el renderizado de las tarjetas de habilidad.

export default function Skills () {
  return (
    <section id="skills" className="pt-28 bg-[#FAF3E3] section-pattern relative">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 right-20 w-8 h-8 bg-primary-blue/10 rounded-full animate-float"></div>
      <div className="absolute bottom-40 left-20 w-6 h-6 bg-primary-yellow/10 rounded-full animate-bounce-gentle"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Tecnologías" 
          subtitle="Mis habilidades técnicas" 
        />
        
        <div className="mt-16 space-y-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
              {/* Header de categoría */}
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-xl ${category.isLearning ? 'bg-primary-yellow/20 text-primary-yellow' : 'bg-primary-blue/20 text-primary-blue'}`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-neutral-black font-display">
                  {category.title}
                </h3>
                {category.isLearning && (
                  <span className="px-3 py-1 bg-primary-yellow/20 text-primary-yellow text-sm font-medium rounded-full">
                    Aprendiendo
                  </span>
                )}
              </div>
              
              {/* Grid de habilidades */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className={`group relative flex flex-col items-center p-6 rounded-2xl transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl border border-[#F6F1EB] bg-[#FAF3E3] hover:bg-[#FFF8E1] hand-drawn-border`}
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                  >
                    {/* Icono */}
                    <div className={`w-16 h-16 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 opacity-100`}>
                      {skill.icon}
                    </div>
                    {/* Nombre */}
                    <span className={`text-sm font-semibold text-center transition-colors duration-300 text-neutral-black group-hover:text-primary-blue`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Leyenda de niveles */}
        {/* Eliminada por consistencia visual */}
      </div>
    </section>
  );
};