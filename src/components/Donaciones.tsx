import React, { useState } from 'react';

interface PaymentCardProps {
  name: string;
  number: string;
  logoUrl: string;
  qrUrl: string;
  brandColor: string;
  textColor: string;
}

export const Donaciones: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, name: string) => {
    navigator.clipboard.writeText(text.replace(/\s/g, '')); // Copia el número sin espacios
    setCopiedText(name);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const platforms: PaymentCardProps[] = [
    {
      name: 'Nequi',
      number: '300 123 4567',
      // Logo oficial o texto representativo (puedes cambiarlo por tu asset local)
      logoUrl: 'https://images.unsplash.com/photo-1614680376593-902f74fa0d41?w=100&auto=format&fit=crop&q=60', // Placeholder elegante
      qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=nequi-example',
      brandColor: 'bg-gradient-to-br from-purple-900 via-indigo-950 to-purple-900',
      textColor: 'text-purple-400'
    },
    {
      name: 'Daviplata',
      number: '310 987 6543',
      logoUrl: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=100&auto=format&fit=crop&q=60', // Placeholder elegante
      qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=daviplata-example',
      brandColor: 'bg-gradient-to-br from-red-700 via-rose-900 to-red-800',
      textColor: 'text-rose-300'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto my-12 p-8 bg-white/95 rounded-3xl shadow-2xl border border-gray-100/80">
      {/* Encabezado Principal */}
      <div className="text-center mb-10">
        <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full uppercase tracking-wider">
          Apoya nuestra misión
        </span>
        <h2 className="text-3xl font-extrabold text-slate-800 mt-3 tracking-tight">
          Ofrendas y Donaciones
        </h2>
        <p className="text-slate-500 mt-2 max-w-md mx-auto text-sm leading-relaxed">
          Tu generosidad hace posible continuar con nuestra obra y servicio comunitario. Elige tu método preferido.
        </p>
      </div>

      {/* Grid de Tarjetas */}
      <div className="grid md:grid-cols-2 gap-6">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className={`relative overflow-hidden p-6 rounded-2xl ${platform.brandColor} text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col justify-between`}
          >
            {/* Fondo decorativo sutil */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex justify-between items-start gap-4">
              {/* Información de la cuenta */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-black tracking-wider uppercase">
                    {platform.name}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                
                <p className="text-xs text-white/70 font-medium uppercase tracking-wide">
                  Número de cuenta
                </p>
                <p className="text-2xl font-mono font-bold tracking-widest mt-0.5">
                  {platform.number}
                </p>

                {/* Botón interactivo para copiar */}
                <button
                  onClick={() => handleCopy(platform.number, platform.name)}
                  className="mt-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-lg text-xs font-medium transition-colors border border-white/10 backdrop-blur-sm"
                >
                  {copiedText === platform.name ? (
                    <>
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-emerald-400 font-semibold">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      <span>Copiar número</span>
                    </>
                  )}
                </button>
              </div>

              {/* Contenedor del QR expuesto */}
              <div className="bg-white p-2.5 rounded-xl shadow-lg border border-white/20 flex flex-col items-center shrink-0">
                <img
                  src={platform.qrUrl}
                  alt={`QR ${platform.name}`}
                  className="w-28 h-28 object-contain"
                />
                <span className="text-[10px] text-slate-400 font-semibold mt-1.5 uppercase tracking-wide">
                  Escanear QR
                </span>
              </div>
            </div>

            {/* Nota al pie de la tarjeta */}
            <div className="mt-6 pt-3 border-t border-white/10 flex justify-between items-center text-xs text-white/60">
              <span>Transferencia directa</span>
              <span className="font-medium text-white/90">Sin comisiones</span>
            </div>
          </div>
        ))}
      </div>

      {/* Versículo / Nota final de la Iglesia */}
      <div className="mt-10 text-center border-t border-gray-200/60 pt-6">
        <p className="text-xs italic text-slate-400 max-w-lg mx-auto leading-relaxed">
          "Cada uno dé como propuso en su corazón; no con tristeza, ni por necesidad, porque Dios ama al dador alegre." 
          <span className="block font-medium mt-1 not-italic text-slate-500">— 2 Corintios 9:7</span>
        </p>
      </div>
    </div>
  );
};