// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectSingle from './pages/ProjectSingle';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/" className="hover:underline"><img src="assets/logo.svg" alt="Logo" className="inline-block w-8 h-8 mr-2" />Accueil</Link>
        <Link to="/projects" className="hover:underline">A Propos</Link>
        <Link to="/projects" className="hover:underline">Contact</Link>
        <Link to="/projects" className="hover:underline">Projets</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectSingle />} />
      </Routes>
    </Router>
  );
}

export default App;
