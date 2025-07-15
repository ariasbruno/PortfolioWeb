import React from 'react';
import { Github, FileTextIcon, Linkedin, Mail } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ariasbruno",
    icon: <Linkedin size={24} />,
    label: "Conecta conmigo en LinkedIn"
  },
  {
    name: "Email",
    url: "mailto:ariasbruno017@gmail.com",
    icon: <Mail size={24} />,
    label: "Envíame un email"
  },
  {
    name: "GitHub",
    url: "https://github.com/ariasbruno",
    icon: <Github size={24} />,
    label: "Revisa mi código en GitHub"
  }
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-20 pb-16 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading title="Hablemos" subtitle="¿Tienes un proyecto en mente?" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-center text-gray-600 mb-10 dark:text-gray-300">
            Estoy abierto a oportunidades de colaboración y nuevos proyectos. 
            Si tienes una idea interesante o necesitas ayuda con tu proyecto, 
            no dudes en contactarme.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex items-center gap-3 px-6 py-4 rounded-lg bg-white hover:bg-gray-50 transition-colors border border-gray-300 hover:border-blue-600/50 group dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:hover:border-yellow-400/50"
              >
                <span className="text-gray-500 group-hover:text-blue-600 transition-colors dark:text-gray-400 dark:group-hover:text-yellow-400">
                  {link.icon}
                </span>
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <a
              href="/CV.pdf"
              target="_blank"
              className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-yellow-400"
            >
              <span>Ver CV</span>
              <FileTextIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
