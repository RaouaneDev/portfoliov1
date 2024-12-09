'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProjects } from '@/hooks/useProjects';

export default function AdminPage() {
  const router = useRouter();
  const { addProject } = useProjects();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    url: '',
    technologies: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convertir la chaîne de technologies en tableau
    const technologiesArray = formData.technologies
      .split(',')
      .map(tech => tech.trim())
      .filter(tech => tech !== '');

    // Créer le nouveau projet
    const newProject = {
      ...formData,
      technologies: technologiesArray
    };

    // Ajouter le projet
    addProject(newProject);

    // Rediriger vers la page d'accueil
    router.push('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-pink-900 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-violet-950/50 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-violet-200 mb-8">Ajouter un Projet</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-violet-200 mb-2">Titre</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-violet-900/50 border border-violet-700 text-white focus:outline-none focus:border-pink-500"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-violet-200 mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-violet-900/50 border border-violet-700 text-white focus:outline-none focus:border-pink-500 h-32"
              required
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-violet-200 mb-2">URL de l'image</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-violet-900/50 border border-violet-700 text-white focus:outline-none focus:border-pink-500"
              required
            />
          </div>

          <div>
            <label htmlFor="url" className="block text-violet-200 mb-2">URL du projet</label>
            <input
              type="url"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-violet-900/50 border border-violet-700 text-white focus:outline-none focus:border-pink-500"
              required
            />
          </div>

          <div>
            <label htmlFor="technologies" className="block text-violet-200 mb-2">Technologies (séparées par des virgules)</label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-violet-900/50 border border-violet-700 text-white focus:outline-none focus:border-pink-500"
              placeholder="React, Node.js, TypeScript"
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.push('/')}
              className="px-6 py-2 rounded bg-violet-800 text-violet-200 hover:bg-violet-700 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded bg-pink-600 text-white hover:bg-pink-500 transition-colors"
            >
              Ajouter le projet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
