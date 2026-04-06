
import React, { useEffect, useState } from 'react';

const NAMES = [
  'João Paulo', 'Maria Clara', 'Pedro Henrique', 'Ana Beatriz', 'Lucas Oliveira',
  'Juliana Santos', 'Rafael Costa', 'Fernanda Lima', 'Bruno Alves', 'Camila Rodrigues',
  'Diego Ferreira', 'Larissa Souza', 'Mateus Carvalho', 'Bianca Martins', 'Thiago Pereira',
  'Isabela Gomes', 'Vinícius Barbosa', 'Natália Silva', 'Guilherme Ribeiro', 'Amanda Nascimento',
  'Renata Almeida', 'Carlos Eduardo', 'Priscila Moraes', 'Henrique Teixeira', 'Letícia Freitas',
];

const STORAGE_KEY = 'sprf_shown';

const SocialProofToast: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const shown: string[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const available = NAMES.filter(n => !shown.includes(n));

      // Se todos foram exibidos, limpa o histórico e recomeça
      const pool = available.length > 0 ? available : NAMES;
      if (available.length === 0) localStorage.removeItem(STORAGE_KEY);

      const chosen = pool[Math.floor(Math.random() * pool.length)];
      setName(chosen);
      setVisible(true);

      const updatedShown = available.length > 0 ? [...shown, chosen] : [chosen];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedShown));

      // Auto-dismiss após 5 s
      const dismissTimer = setTimeout(() => dismiss(), 5000);
      return () => clearTimeout(dismissTimer);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setLeaving(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible || !name) return null;

  return (
    <div
      className={`fixed top-24 right-4 z-50 flex items-center gap-3 bg-white border border-master-light rounded-2xl shadow-[0_8px_32px_-8px_rgba(4,24,43,0.18)] px-4 py-3 max-w-[260px] transition-all duration-400 ${
        leaving ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
      }`}
      style={{ animation: leaving ? undefined : 'slideInRight 0.4s ease' }}
      role="status"
      aria-live="polite"
    >
      {/* Avatar inicial */}
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-master-primary flex items-center justify-center text-white text-xs font-black font-heading">
        {name.charAt(0)}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-black text-master-deep font-heading leading-tight truncate">
          {name}
        </p>
        <p className="text-[10px] text-master-slate/60 font-normal leading-tight">
          acabou de comprar o curso
        </p>
      </div>

      <button
        onClick={dismiss}
        aria-label="Fechar notificação"
        className="flex-shrink-0 text-master-light/60 hover:text-master-slate transition-colors ml-1"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default SocialProofToast;
