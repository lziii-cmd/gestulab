'use client';

interface MockupPreviewProps {
  src: string | null;
  label: string;
  gradient: string;
}

export default function MockupPreview({ src, label, gradient }: MockupPreviewProps) {
  if (!src) {
    return (
      <div className={`h-52 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 grid-pattern opacity-25" />
        {/* Browser chrome */}
        <div className="absolute top-3 left-3 right-3 bg-dark-800/80 backdrop-blur rounded-lg px-3 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 bg-dark-700/70 rounded px-2 py-0.5 text-[10px] text-text-muted tracking-wide">
            gestulab.app/{label.toLowerCase()}
          </div>
        </div>
        {/* Center label */}
        <span className="text-6xl font-black text-white/15 tracking-widest relative z-10 select-none group-hover:text-white/22 transition-all">
          {label}
        </span>
        {/* Mockup coming soon */}
        <div className="absolute bottom-3 right-3 bg-dark-800/60 backdrop-blur text-text-muted text-[10px] px-2 py-1 rounded font-mono border border-white/5">
          mockup soon
        </div>
      </div>
    );
  }

  return (
    <div className="h-52 relative overflow-hidden bg-[#f0f0f0] group/preview">
      {/* Browser chrome */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-[#1e1e2e]/95 backdrop-blur-sm px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/90" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/90" />
        </div>
        <div className="flex-1 bg-white/10 rounded px-2 py-0.5 text-[10px] text-white/50 tracking-wide">
          gestulab.app/{label.toLowerCase()}
        </div>
      </div>
      {/* Scaled iframe */}
      <div className="absolute top-[34px] left-0 right-0 bottom-0 overflow-hidden">
        <iframe
          src={src}
          title={`Aperçu ${label}`}
          scrolling="no"
          style={{
            width: '1280px',
            height: '900px',
            border: 'none',
            transformOrigin: 'top left',
            transform: 'scale(0.258)',
            pointerEvents: 'none',
          }}
        />
      </div>
      {/* Hover overlay */}
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-all duration-300 bg-dark/65 backdrop-blur-sm"
        onClick={e => e.stopPropagation()}
      >
        <span className="btn-gradient px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-xl">
          <span>Voir la démo live</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
        </span>
      </a>
    </div>
  );
}
