// HomePage.jsx
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function HomePage() {
  const recentProjects = projects.slice(0, 2);
  return (
    <div className="p-8 space-y-16">
      <section className="flex flex-col items-center">
        <img src="/photo.jpg" alt="Moi" className="w-40 h-40 rounded-full mb-4" />
        <h1 className="text-4xl font-bold">Mélina Terrier</h1>
        <h2 className="text-2xl text-gray-700">Développeuse Full Stack</h2>
        <p className="text-lg text-center max-w-xl">Passionnée par le développement full stack, je crée des projets modernes et performants avec React, PHP, TypeScript...</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">À propos</h2>
        <p>Actuellement en Master Ingénierie du Web à l’ESGI, j’ai une formation axée sur le développement web, l’intégration et la gestion de projets techniques. Curieuse, rigoureuse et passionnée, je suis toujours à la recherche de nouvelles choses à apprendre.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Projets récents</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentProjects.map((project) => (
            <li key={project.id} className="border p-4 rounded shadow">
              <Link to={`/projects/${project.id}`} className="text-xl text-blue-600 hover:underline">
                {project.title}
              </Link>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>Pour toute demande, collaboration ou question : <a href="mailto:monemail@example.com" className="text-blue-600">monemail@example.com</a></p>
      </section>
    </div>
  );
}
