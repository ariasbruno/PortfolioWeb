import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
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
    url: "https://www.linkedin.com/in/bruno-arias-91b2122a3",
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
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading title="Hablemos" subtitle="¿Tienes un proyecto en mente?" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-center text-gray-300 mb-10">
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
                className="flex items-center gap-3 px-6 py-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700 hover:border-yellow-400/50 group"
              >
                <span className="text-gray-400 group-hover:text-yellow-400 transition-colors">
                  {link.icon}
                </span>
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;