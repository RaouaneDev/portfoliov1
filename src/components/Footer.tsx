import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-violet-950/80 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white hover:text-pink-300 transition-colors">
              Portfolio
            </Link>
            <p className="mt-4 text-violet-200">
              Développeur Full Stack passionné par la création d'applications web modernes et performantes.
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-300">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-violet-200 hover:text-pink-300 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-violet-200 hover:text-pink-300 transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-violet-200 hover:text-pink-300 transition-colors">
                  Compétences
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-violet-200 hover:text-pink-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Réseaux Sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-300">Me Suivre</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-violet-200 hover:text-pink-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-violet-200 hover:text-pink-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-violet-200 hover:text-pink-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright et Admin Link */}
        <div className="mt-8 pt-8 border-t border-violet-800/30 flex justify-between items-center">
          <p className="text-violet-200"> {new Date().getFullYear()} Portfolio. Tous droits réservés.</p>
          <Link 
            href="/admin" 
            className="text-violet-400/30 hover:text-pink-400/80 transition-colors text-sm flex items-center gap-1"
          >
            <span className="sr-only">Administration</span>
            ⚙️
          </Link>
        </div>
      </div>
    </footer>
  );
}
