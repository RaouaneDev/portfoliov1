import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-violet-950/80 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-violet-200">
              Portfolio
            </Link>
            <p className="mt-4 text-violet-200">
              Développeur Full Stack passionné par la création d&#39;applications web modernes et performantes.
            </p>
            <p className="text-sm text-violet-300">Créateur d&#39;expériences web modernes et performantes</p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-lg font-semibold text-violet-200 mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-violet-300 hover:text-pink-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-violet-300 hover:text-pink-400 transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-violet-300 hover:text-pink-400 transition-colors">
                  Compétences
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-violet-300 hover:text-pink-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Réseaux Sociaux */}
          <div>
            <h3 className="text-lg font-semibold text-violet-200 mb-4">Suivez-moi</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-300 hover:text-pink-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-300 hover:text-pink-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-300 hover:text-pink-400 transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-violet-800/30 flex justify-between items-center">
          <p className="text-violet-200">&copy; {new Date().getFullYear()} Portfolio. Tous droits réservés.</p>
          <Link 
            href="/admin" 
            className="text-violet-400/30 hover:text-pink-400/80 transition-colors text-sm flex items-center gap-1"
          >
            <span className="sr-only">Administration</span>
            &#x2699;&#xfe0f;
          </Link>
        </div>
      </div>
    </footer>
  );
}
