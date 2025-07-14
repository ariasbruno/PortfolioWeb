import React from 'react';
import { MapPin, User, BookOpen, Code, Heart } from 'lucide-react';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#FAF3E3] section-pattern relative">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 right-10 w-6 h-6 bg-primary-blue/10 rounded-full animate-float"></div>
      <div className="absolute bottom-10 left-10 w-4 h-4 bg-primary-yellow/10 rounded-full animate-bounce-gentle"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Sobre Mí" 
          subtitle="Conoce más acerca de mi perfil" 
        />

        <div className="mt-16 max-w-4xl mx-auto">
          {/* Tarjeta principal */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-card hand-drawn-border hover:shadow-card-hover transition-all duration-500">
            <div className="p-8 md:p-10 bg-[#FAF3E3] rounded-2xl shadow-lg border border-[#F6F1EB] hover:bg-[#FFF8E1] transition-colors duration-300">
              {/* Header con información básica */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                <div className="flex items-center gap-3 text-primary-blue">
                  <User size={20} />
                  <span className="text-sm font-medium">Desarrollador Web</span>
                </div>
                
                <div className="flex items-center gap-2 text-neutral-gray">
                  <MapPin size={18} />
                  <span className="text-sm font-medium">Buenos Aires, Argentina</span>
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-6 text-neutral-black font-display">
                Pasión por el Desarrollo Web
              </h3>

              {/* Contenido principal */}
              <div className="space-y-6 text-neutral-gray leading-relaxed">
                <p className="text-lg">
                  Desarrollador web apasionado por crear experiencias digitales funcionales y atractivas. 
                  Actualmente estoy iniciando mis estudios en <span className="text-primary-blue font-semibold">Ingeniería Informática</span>.
                </p>
                
                <p>
                  Mi camino en la programación web comenzó de forma autodidacta, explorando HTML y CSS a través de cursos en YouTube, 
                  para luego sumergirme en JavaScript con plataformas como <span className="text-primary-blue font-semibold">freeCodeCamp</span> y 
                  <span className="text-primary-blue font-semibold"> Full Stack Open</span>. Durante este período, desarrollé numerosos proyectos 
                  pequeños y completé todos los ejercicios propuestos.
                </p>
                
                <p>
                  Disfruto por igual los desafíos del desarrollo frontend y backend. Me entusiasma aprender continuamente nuevas 
                  tecnologías y herramientas para mantenerme actualizado en este campo tan dinámico, habiendo comenzado recientemente 
                  a explorar <span className="text-primary-blue font-semibold">Python</span> como parte de mi formación universitaria, 
                  y con planes de profundizar en <span className="text-primary-blue font-semibold">SQL</span>.
                </p>
                
                <p>
                  Fuera de la programación, me interesa la tecnología en general y disfruto del deporte. Estas actividades me ayudan 
                  a mantener una perspectiva fresca y creativa en mis proyectos de desarrollo.
                </p>
              </div>

              {/* Proyectos destacados */}
              <div className="mt-10">
                <h4 className="text-xl font-semibold text-neutral-black mb-6 flex items-center gap-2 font-display">
                  <BookOpen size={20} className="text-primary-blue" />
                  Mis Proyectos Destacados
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-neutral-cream-light rounded-xl hover:bg-neutral-cream transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary-yellow rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-bold text-primary-blue">QuickNotes</span>
                      <p className="text-sm text-neutral-gray mt-1">
                        Mi primer proyecto significativo, donde me propuse el desafío de construir una aplicación de notas 
                        utilizando exclusivamente HTML, CSS y JavaScript vanilla (100%), consolidando así mis bases fundamentales.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-neutral-cream-light rounded-xl hover:bg-neutral-cream transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary-yellow rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-bold text-primary-blue">
                        Madetodo
                        <span className="text-sm italic text-neutral-gray font-normal"> (Aún no está subido)</span>
                      </span>
                      <p className="text-sm text-neutral-gray mt-1">
                        Un proyecto ambicioso inspirado en una plataforma web existente. Avancé considerablemente en su desarrollo 
                        utilizando Strapi 5 y Next.js 15, buscando replicar y mejorar funcionalidades.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-neutral-cream-light rounded-xl hover:bg-neutral-cream transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary-yellow rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-bold text-primary-blue">Rincón Casero</span>
                      <p className="text-sm text-neutral-gray mt-1">
                        Recientemente finalicé el desarrollo de esta aplicación web completa para un emprendimiento familiar, 
                        enfocada en la gestión de menú y pedidos online para un local de pizzas y empanadas.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-neutral-cream-light rounded-xl hover:bg-neutral-cream transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary-yellow rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-bold text-primary-blue">
                        Thermal Ticket (Android)
                        <span className="text-sm italic text-neutral-gray font-normal"> (Aún no está subido)</span>
                      </span>
                      <p className="text-sm text-neutral-gray mt-1">
                        Paralelamente, estoy creando una aplicación Android con React Native destinada a la impresión de 
                        facturas y tickets de venta mediante una impresora térmica, también para el emprendimiento familiar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer con iconos */}
              <div className="mt-8 pt-6 border-t border-neutral-gray-light flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-primary-blue">
                  <Code size={16} />
                  <span className="text-sm font-medium">Desarrollo Web</span>
                </div>
                <div className="flex items-center gap-2 text-primary-yellow">
                  <Heart size={16} />
                  <span className="text-sm font-medium">Pasión por el Código</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;