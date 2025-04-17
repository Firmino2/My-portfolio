import React, { useState } from 'react';
import { Github, Mail, ExternalLink, Code2, Sparkles, Brain, Coffee } from 'lucide-react';

function App() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Zenith Music",
      description: "Site de músicas com pesquisa avançada e reprodução em tempo real",
      tech: "React, TypeScript, APIs de Música",
      link: "https://zenithmusic.vercel.app/"
    },
    {
      title: "Spotify Checker",
      description: "Ferramenta de análise e visualização de dados do Spotify",
      tech: "Next.js, Python, TypeScript, APIs Spotify",
      link: "https://spotify-checker-umber.vercel.app/"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Firmino2" },
    { icon: Mail, href: "mailto:Firminoh7@proton.me" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Seção Hero */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="z-10 text-center p-4 transform hover:scale-105 transition-transform duration-500">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Firminoh7
          </h1>
          <p className="text-2xl text-purple-300 mb-8">Desenvolvedor Full Stack & Artista Digital</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-purple-900/30 hover:bg-purple-600 transition-colors duration-300"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Seção de Habilidades */}
      <div className="py-20 bg-black/80">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Habilidades & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code2, title: "Desenvolvimento", desc: "Magia Full Stack" },
              { icon: Brain, title: "IA/ML", desc: "Redes Neurais" },
              { icon: Sparkles, title: "UI/UX", desc: "Design Criativo" },
              { icon: Coffee, title: "DevOps", desc: "Arquitetura Cloud" }
            ].map(({ icon: Icon, title, desc }, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-purple-900/20 hover:bg-purple-900/30 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <Icon className="w-12 h-12 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-purple-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seção de Projetos */}
      <div className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Projetos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className={`p-6 rounded-lg bg-purple-900/20 border border-purple-500/30 transform transition-all duration-500 cursor-pointer ${
                  activeProject === index ? 'scale-105 bg-purple-900/40' : 'hover:scale-102'
                }`}
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                </h3>
                <p className="text-purple-300 mb-4">{project.description}</p>
                <p className="text-sm text-purple-400">{project.tech}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Seção de Contato */}
      <div className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-purple-400">Vamos Conectar</h2>
          <p className="text-purple-300 mb-8">
            Entre em contato através do meu email para discutirmos projetos e oportunidades.
          </p>
          <a
            href="mailto:Firminoh7@proton.me"
            className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 rounded-full font-semibold hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Firminoh7@proton.me
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;