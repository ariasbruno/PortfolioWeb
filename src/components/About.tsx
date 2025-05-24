import React from 'react';
import { MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading title="Sobre Mí" subtitle="Conoce más acerca de mi perfil" />

        <div className="mt-12 max-w-3xl mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-xl">
          <div className="p-8">
            <div className="flex items-center gap-2 mb-4 text-yellow-400">
              <MapPin size={18} />
              <span className="text-sm font-medium">Buenos Aires, Argentina</span>
            </div>

            <h3 className="text-2xl font-bold mb-4">Desarrollador Web</h3>

            <div className="space-y-4 text-gray-300">
              <p>
                Desarrollador web apasionado por crear experiencias digitales funcionales y atractivas. Actualmente estoy iniciando mis estudios en Ingeniería Informática.
              </p>
              <p>
                Mi camino en la programación web comenzó de forma autodidacta, explorando HTML y CSS a través de cursos en YouTube, para luego sumergirme en JavaScript con plataformas como freeCodeCamp y Full Stack Open. Durante este período, desarrollé numerosos proyectos pequeños y completé todos los ejercicios propuestos.
              </p>
              <p>
                Disfruto por igual los desafíos del desarrollo frontend y backend. Me entusiasma aprender continuamente nuevas tecnologías y herramientas para mantenerme actualizado en este campo tan dinámico, habiendo comenzado recientemente a explorar Python como parte de mi formación universitaria, y con planes de profundizar en SQL.
              </p>
              <p>
                Fuera de la programación, me interesa la tecnología en general y disfruto del deporte. Estas actividades me ayudan a mantener una perspectiva fresca y creativa en mis proyectos de desarrollo.
              </p>
              <h4 className='text-xl'>
                Mis proyectos destacados incluyen:
              </h4>

              <ul className='space-y-3'>
                <li>
                  <span className='font-bold text-yellow-400'>QuickNotes</span>: Mi primer proyecto significativo, donde me propuse el desafío de construir una aplicación de notas utilizando exclusivamente HTML, CSS y JavaScript vanilla (100%), consolidando así mis bases fundamentales.
                </li>
                <li>
                <span className='font-bold text-yellow-400'>Madetodo<span className='text-sm italic text-gray-300'>(Aun no esta subido)</span></span>: Un proyecto ambicioso inspirado en una plataforma web existente. Avancé considerablemente en su desarrollo utilizando strapi 5 y nextjs 15, buscando replicar y mejorar funcionalidades. La sección de integración de pagos representó un desafío que me llevo a pausarlo temporalmente para adquirir conocimientos más específicos en esa área.
                </li>
                <li>
                <span className='font-bold text-yellow-400'>Rincón Casero</span>: Recientemente finalicé el desarrollo de esta aplicación web completa para un emprendimiento familiar, enfocada en la gestión de menú y pedidos online para un local de pizzas y empanadas.
                </li>
                <li>

                <span className='font-bold text-yellow-400'>Thermal Ticket(Android)<span className='text-sm italic text-gray-300'>(Aun no esta subido)</span></span>: Paralelamente, estoy creando una aplicación Android con React Native destinada a la impresión de facturas y tickets de venta mediante una impresora térmica, también para el emprendimiento familiar.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;