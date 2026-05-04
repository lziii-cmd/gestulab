import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark grid-pattern flex items-center justify-center px-6">
      <div className="hero-glow w-[400px] h-[400px] bg-indigo/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed" />
      <div className="relative z-10 text-center max-w-lg">
        {/* Code-style 404 */}
        <div className="glass rounded-2xl p-8 mb-10 font-mono text-sm text-left inline-block">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-green-400/80" />
            <span className="ml-2 text-text-muted text-[11px]">error.py</span>
          </div>
          <div className="space-y-1">
            <p><span className="text-indigo-light">raise</span> <span className="text-cyan">PageNotFoundError</span><span className="text-white">(</span></p>
            <p className="pl-6"><span className="text-emerald-400">"Cette page n'existe pas."</span></p>
            <p><span className="text-white">)</span></p>
            <p className="mt-3 text-text-muted"># Code : 404</p>
          </div>
        </div>

        <h1 className="text-[clamp(2rem,5vw,3rem)] font-black text-white mb-4 leading-tight">
          Page introuvable
        </h1>
        <p className="text-text-secondary text-lg mb-10 leading-relaxed">
          Cette page n&apos;existe pas ou a été déplacée.<br />
          Explorons quelque chose qui existe.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-gradient px-8 py-4 rounded-xl font-bold">
            <span>Retour à l&apos;accueil</span>
          </Link>
          <Link href="/projets" className="px-8 py-4 rounded-xl font-bold border border-white/10 text-white hover:bg-white/5 transition-all">
            Voir les projets
          </Link>
        </div>
      </div>
    </div>
  );
}
