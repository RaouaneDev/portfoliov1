'use client';

import { useState, useEffect } from 'react';

export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Charger les projets depuis localStorage au montage
    const storedProjects = localStorage.getItem('portfolio-projects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  const addProject = (project: Project) => {
    const updatedProjects = [...projects, project];
    setProjects(updatedProjects);
    localStorage.setItem('portfolio-projects', JSON.stringify(updatedProjects));
  };

  return { projects, addProject };
}
