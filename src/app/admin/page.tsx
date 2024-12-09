'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProjects } from '@/hooks/useProjects';
import Image from 'next/image';

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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Créer une URL pour la prévisualisation
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const uploadFile = async (file: File): Promise<string> => {
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      return data.filename;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let imageUrl = formData.image;
      
      // Si un fichier est sélectionné, l'uploader d'abord
      if (selectedFile) {
        imageUrl = await uploadFile(selectedFile);
      }

      // Convertir la chaîne de technologies en tableau
      const technologiesArray = formData.technologies
        .split(',')
        .map(tech => tech.trim())
        .filter(tech => tech !== '');

      // Créer le nouveau projet
      const newProject = {
        ...formData,
        image: imageUrl,
        technologies: technologiesArray
      };

      // Ajouter le projet
      addProject(newProject);

      // Rediriger vers la page d'accueil
      router.push('/');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Une erreur est survenue lors de l\'ajout du projet');
    }
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
            <label htmlFor="image" className="block text-violet-200 mb-2">Image du projet</label>
            <div className="space-y-4">
              <input
                type="file"
                id="imageFile"
                accept="image/*"
                onChange={handleFileSelect}
                className="w-full px-4 py-2 rounded bg-violet-900/50 border border-violet-700 text-white focus:outline-none focus:border-pink-500"
              />
              <p className="text-violet-300 text-sm">ou</p>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="URL de l'image"
                className="w-full px-4 py-2 rounded bg-violet-900/50 border border-violet-700 text-white focus:outline-none focus:border-pink-500"
              />
              
              {previewUrl && (
                <div className="mt-4 relative w-full aspect-video">
                  <Image
                    src={previewUrl}
                    alt="Prévisualisation"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
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
              placeholder="React, Next.js, TypeScript..."
              className="w-full px-4 py-2 rounded bg-violet-900/50 border border-violet-700 text-white focus:outline-none focus:border-pink-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isUploading}
            className={`w-full py-3 rounded-lg bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold hover:from-violet-500 hover:to-pink-500 transition-all transform hover:scale-105 ${
              isUploading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isUploading ? 'Upload en cours...' : 'Ajouter le projet'}
          </button>
        </form>
      </div>
    </div>
  );
}