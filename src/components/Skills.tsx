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
    <section id="skills" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading title="Tecnologías" subtitle="Mis habilidades técnicas" />
        
        <div className="mt-12 space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-xl font-semibold mb-6 inline-block border-b-2 border-blue-600 pb-1 dark:border-yellow-400">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className={`flex flex-col border border-gray-300 items-center p-4 rounded-lg ${
                      category.isLearning 
                        ? 'bg-gray-100/50 hover:shadow-blue-200/10 dark:bg-gray-800/50 dark:hover:shadow-yellow-200/10' 
                        : 'bg-white hover:bg-gray-50 hover:shadow-blue-600/20 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:shadow-yellow-400/20'
                    } transition-all hover:shadow-md group dark:border-gray-700`}
                  >
                    <div className={`w-12 h-12 mb-3 flex items-center justify-center ${category.isLearning ? "opacity-80": "opacity-100"}`}>
                      {skill.icon}
                    </div>
                    <span className={`text-sm font-medium ${category.isLearning ? 'text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-200'}`}>
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