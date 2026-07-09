import React, { useEffect, useState } from 'react';

interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

export const Contenido: React.FC = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

  useEffect(() => {
    const fetchChannelVideos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=15&type=video`
        );

        if (!response.ok) {
          throw new Error('No se pudieron cargar los videos de YouTube.');
        }

        const data = await response.json();
        setVideos(data.items || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ocurrió un error inesperado');
      } finally {
        setLoading(false);
      }
    };

    // Validamos simplemente que las variables existan y no estén vacías
    if (API_KEY && CHANNEL_ID) {
      fetchChannelVideos();
    } else {
      setLoading(false);
    }
  }, [API_KEY, CHANNEL_ID]);

  // 1. Estado de Carga (Skeletons ordenados en 3 columnas)
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto my-12 p-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="bg-white rounded-2xl p-3 animate-pulse border border-slate-100">
              <div className="bg-slate-200 aspect-video rounded-xl w-full mb-3" />
              <div className="h-4 bg-slate-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-slate-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Si las variables no existen en el .env, avisamos de forma clara
  if (error || !API_KEY || !CHANNEL_ID) {
    return (
      <div className="max-w-md mx-auto my-12 p-6 bg-red-50 border border-red-200 rounded-2xl text-center">
        <p className="text-sm font-medium text-red-800">
          {error || 'Faltan las variables de entorno. Verifica tu archivo .env en la raíz.'}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto my-12 p-4">
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-800 mt-3 tracking-tight">
          CLINICA ESPIRITUAL PARA EL ALMA
        </h2>
        <p className="text-slate-500 mt-2 text-sm">
          Explora los contenidos más recientes transmitidos en nuestra plataforma.
        </p>
      </div>

      {/* Grid de Videos - Ajustado estrictamente a máximo 3 columnas */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <a
            key={video.id.videoId}
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-3 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Miniatura */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 mb-3">
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 p-2 rounded-full shadow-md text-slate-800">
                    <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Título */}
              <h4 className="font-bold text-slate-800 text-sm line-clamp-2 group-hover:text-indigo-600 transition-colors leading-tight">
                {video.snippet.title}
              </h4>
            </div>

            {/* Descripción sutil */}
            <p className="text-[11px] text-slate-400 mt-3 line-clamp-1 border-t border-slate-50 pt-2">
              {video.snippet.description || 'Ver en YouTube'}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};