import SectionHeading from './SectionHeading';
import { CSS, HTML5, JavaScript, MySQL, Nextjs, Nodejs, Python, TailwindCSS, TypeScript, ReactIcon } from './ui/skill-icons';

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  isLearning?: boolean;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Más Usados",
    skills: [
      { name: "HTML", icon: <HTML5/> },
      { name: "CSS", icon: <CSS/> },
      { name: "JavaScript", icon: <JavaScript/> },
      { name: "React", icon: <ReactIcon/> },
      { name: "Tailwind CSS", icon: <TailwindCSS/> },
      { name: "Next.js", icon: <Nextjs/> },
      { name: "Node.js", icon: <Nodejs/> },
      { name: "TypeScript", icon: <TypeScript/> },
    ]
  },
  {
    title: "Aprendiendo Actualmente",
    skills: [
      { name: "SQL", icon: <MySQL/> },
      { name: "Python", icon: <Python/> },
      { name: "React Native", icon: <ReactIcon/> },
    ],
    isLearning: true
  }
];

export default function Skills () {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading title="Tecnologías" subtitle="Mis habilidades técnicas" />
        
        <div className="mt-12 space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-xl font-semibold mb-6 inline-block border-b-2 border-yellow-400 pb-1">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className={`flex flex-col border border-gray-700 items-center p-4 rounded-lg ${
                      category.isLearning 
                        ? 'bg-gray-800/50 hover:shadow-yellow-200/10' 
                        : 'bg-gray-800 hover:bg-gray-700 hover:shadow-yellow-400/20'
                    } transition-all hover:shadow-md group`}
                  >
                    <div className={`w-12 h-12 mb-3 flex items-center justify-center ${category.isLearning ? "opacity-80": "opacity-100"}`}>
                      {skill.icon}
                    </div>
                    <span className={`text-sm font-medium ${category.isLearning ? 'text-gray-400' : 'text-gray-200'}`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};