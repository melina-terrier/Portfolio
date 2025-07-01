// ProjectsPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, categories } from '../data/projects';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('Tous');
  const filtered = filter === 'Tous' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Mes projets</h2>

      <div className="mb-6 space-x-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded ${filter === cat ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project) => (
          <li key={project.id} className="border p-4 rounded shadow">
            <Link to={`/projects/${project.id}`} className="text-xl text-blue-600 hover:underline">{project.title}</Link>
            <p className="text-sm text-gray-600">{project.category}</p>
            <p className="text-sm">Outils : {project.tools.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
