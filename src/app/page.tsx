'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useProjects } from "@/hooks/useProjects";
import Contact from "@/components/Contact";

export default function Home() {
  const { projects } = useProjects();

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-violet-950 via-purple-900 to-pink-900 text-white">
      <Navbar />
      
      {/* Section Héro */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-20 relative overflow-hidden w-full">
        {/* Cercles décoratifs en arrière-plan */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-violet-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-pink-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Texte du héro */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-violet-200 to-pink-200 text-transparent bg-clip-text">
                  Développeur Web Full Stack
                </h1>
                <p className="text-lg md:text-xl text-violet-200 mb-6 md:mb-8 leading-relaxed px-4 lg:px-0">
                  Je transforme des idées en applications web modernes et performantes,
                  en utilisant les dernières technologies du marché.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#projects"
                    className="px-6 md:px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold hover:from-violet-500 hover:to-pink-500 transition-all transform hover:scale-105 text-sm md:text-base"
                  >
                    Voir mes projets
                  </a>
                  <a
                    href="#contact"
                    className="px-6 md:px-8 py-3 rounded-full bg-violet-900/50 text-white font-semibold hover:bg-violet-800/50 transition-all transform hover:scale-105 border border-violet-700/50 text-sm md:text-base"
                  >
                    Me contacter
                  </a>
                </div>
                
                {/* Technologies */}
                <div className="mt-8 md:mt-12">
                  <p className="text-violet-300 mb-4 text-sm md:text-base">Technologies principales</p>
                  <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-violet-900/30 text-violet-200 border border-violet-700/30 text-sm md:text-base"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Photo de profil */}
              <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="relative max-w-[280px] sm:max-w-[320px] md:max-w-md mx-auto">
                  {/* Cercle décoratif */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-pink-600/20 rounded-full blur-2xl"></div>
                  
                  {/* Cadre de la photo */}
                  <div className="relative">
                    {/* Formes décoratives */}
                    <div className="absolute -top-4 -right-4 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-violet-600 to-pink-600 rounded-xl transform rotate-12"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-pink-600 to-violet-600 rounded-xl transform -rotate-12"></div>
                    
                    {/* Container de la photo */}
                    <div className="relative rounded-2xl overflow-hidden border-4 border-violet-200/20 aspect-square">
                      <Image
                        src="/profile.jpg"
                        alt="Photo de profil"
                        width={500}
                        height={500}
                        className="object-cover"
                        priority
                      />
                      
                      {/* Overlay subtil */}
                      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/50 to-transparent"></div>
                    </div>
                  </div>

                  {/* Éléments flottants */}
                  <div className="absolute -right-2 md:-right-4 top-1/4 transform rotate-12">
                    <div className="bg-violet-900/90 backdrop-blur-sm text-violet-200 px-3 md:px-4 py-1.5 md:py-2 rounded-lg shadow-lg text-sm md:text-base">
                      <span>💻 Full Stack</span>
                    </div>
                  </div>
                  <div className="absolute -left-2 md:-left-4 bottom-1/4 transform -rotate-12">
                    <div className="bg-pink-900/90 backdrop-blur-sm text-pink-200 px-3 md:px-4 py-1.5 md:py-2 rounded-lg shadow-lg text-sm md:text-base">
                      <span>🚀 Passionné</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-violet-200">
            À propos
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Photo de profil */}
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-pink-600 rounded-2xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-pink-600 rounded-2xl transform -rotate-6 opacity-50"></div>
                <div className="relative rounded-2xl overflow-hidden border-4 border-violet-200/20">
                  <Image
                    src="/profile.jpg"
                    alt="Photo de profil"
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Texte de présentation */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-violet-200">
                Bonjour, je suis <span className="text-pink-400">Votre Nom</span>
              </h3>
              <p className="text-violet-300 leading-relaxed">
                Développeur passionné avec une expertise en développement web moderne.
                Je crée des applications web performantes et esthétiques en utilisant
                les dernières technologies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-pink-400">📍</span>
                  <span className="text-violet-200">Basé(e) à [Votre Ville]</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-pink-400">💼</span>
                  <span className="text-violet-200">Disponible pour des projets freelance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-pink-400">🎓</span>
                  <span className="text-violet-200">[Votre Formation/Diplôme]</span>
                </div>
              </div>
              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold hover:from-violet-500 hover:to-pink-500 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-violet-950"
                >
                  Me contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-violet-200">
            Projets Récents
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link 
                href={project.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="project-card group-hover:shadow-xl group-hover:shadow-violet-500/20">
                  <div className="relative h-[200px] rounded-t-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white text-sm">Voir le projet →</span>
                    </div>
                  </div>
                  <div className="p-6 bg-violet-950/50 rounded-b-lg">
                    <h3 className="text-xl font-bold mb-2 text-violet-200 group-hover:text-pink-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-violet-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-pink-600/20 rounded-full text-sm text-pink-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="skills" className="bg-violet-950/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-violet-200">
            Mes Compétences
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="skill-card">
              <h3 className="text-xl font-bold mb-4 text-pink-300">Front-end</h3>
              <ul className="space-y-2 text-violet-200">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  React & Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Tailwind CSS
                </li>
              </ul>
            </div>
            <div className="skill-card">
              <h3 className="text-xl font-bold mb-4 text-pink-300">Back-end</h3>
              <ul className="space-y-2 text-violet-200">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Node.js & Express
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  MongoDB
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  API REST
                </li>
              </ul>
            </div>
            <div className="skill-card">
              <h3 className="text-xl font-bold mb-4 text-pink-300">Outils</h3>
              <ul className="space-y-2 text-violet-200">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Git & GitHub
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  VS Code
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Docker
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <Contact />

      <Footer />
    </div>
  );
}
