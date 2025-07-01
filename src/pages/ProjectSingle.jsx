// ProjectSingle.jsx
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectSingle() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="p-8">Projet introuvable</div>;

  return (
    <div className="p-8 space-y-6">
      <h2 className="text-3xl font-bold">{project.title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {project.images?.map((img, idx) => (
          <img key={idx} src={img} alt={`screenshot ${idx + 1}`} className="w-full rounded" />
        ))}
      </div>
      <div className="space-x-4">
        {project.online && <a href={project.online} className="text-blue-600 underline" target="_blank" rel="noreferrer">Voir en ligne</a>}
        {project.github && <a href={project.github} className="text-blue-600 underline" target="_blank" rel="noreferrer">Voir le code</a>}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Contexte</h3>
        <p>{project.context}</p>
        <h3 className="text-xl font-semibold">Objectif</h3>
        <p>{project.goal}</p>
        <h3 className="text-xl font-semibold">Processus</h3>
        <p>{project.process}</p>
        <h3 className="text-xl font-semibold">Ce que j’ai appris</h3>
        <p>{project.learnings}</p>
      </div>
      <Link to="/projects" className="text-blue-500 hover:underline">← Retour aux projets</Link>
    </div>
  );
}
