import React from 'react';
import { Github, FileTextIcon, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ariasbruno",
    icon: <Linkedin size={24} />,
    label: "Conecta conmigo en LinkedIn",
    color: "hover:bg-primary-yellow hover:text-black"
  },
  {
    name: "Email",
    url: "mailto:ariasbruno017@gmail.com",
    icon: <Mail size={24} />,
    label: "Envíame un email",
    color: "hover:bg-primary-yellow hover:text-black"
  },
  {
    name: "GitHub",
    url: "https://github.com/ariasbruno",
    icon: <Github size={24} />,
    label: "Revisa mi código en GitHub",
    color: "hover:bg-primary-yellow hover:text-black"
  }
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-20 pb-16 bg-[#FAF3E3] section-pattern relative">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-20 w-6 h-6 bg-primary-blue/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-4 h-4 bg-primary-yellow/10 rounded-full animate-bounce-gentle"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Hablemos" 
          subtitle="¿Tienes un proyecto en mente?" 
        />
        
        <div className="mt-16 max-w-4xl mx-auto">
          {/* Mensaje principal */}
          <div className="text-center mb-12">
            
            <p className="text-lg text-neutral-gray leading-relaxed max-w-2xl mx-auto">
              Estoy abierto a oportunidades de colaboración y nuevos proyectos. 
              Si tienes una idea interesante o necesitas ayuda con tu proyecto, 
              no dudes en contactarme.
            </p>
          </div>
          
          {/* Enlaces sociales */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex gap-2 bg-[#FAF3E3] text-primary-blue font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-primary-blue hover:text-white hover:shadow-2xl transition-all duration-300 text-lg items-center justify-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                  {link.icon}
                  {link.name}
              </a>
            ))}
          </div>
          
          {/* CTA para CV */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-neutral-cream-light rounded-2xl p-6 hand-drawn-border hover:shadow-card-hover transition-all duration-300">
              <div className="p-3 bg-primary-blue/20 text-primary-blue rounded-xl">
                <FileTextIcon size={24} />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-neutral-black">¿Quieres ver mi CV?</h3>
                <p className="text-sm text-neutral-gray">Descarga mi currículum vitae</p>
              </div>
              <a
                href="/CV.pdf"
                target="_blank"
                className="btn-primary flex items-center gap-2"
              >
                <span>Ver CV</span>
                <Send size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
