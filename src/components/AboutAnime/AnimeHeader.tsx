import { Button, Collapse, Skeleton, Typography } from '@mui/material';
import AnimeTrailer from './AnimeTrailer';
import { AboutAnimeData } from './types/AboutAnime';
import { useState } from 'react';

type AnimeHeaderProps = {
  anime?: AboutAnimeData;
  isLoading?: boolean;
};

export default function AnimeHeader({ anime, isLoading }: AnimeHeaderProps) {
  const [isSynopsisExpanded, setIsSynopsisExpanded] = useState(false);

  const handleSynopsisClick = () => {
    setIsSynopsisExpanded((prev) => !prev);
  };

  return (
    <div className="flex gap-8">
      {/* left */}
      <div className="w-[220px] shrink-0 flex flex-col gap-3">
        {isLoading ? (
          <Skeleton variant="rectangular" width={200} height={320} />
        ) : (
          <img
            src={anime?.images?.jpg?.image_url || 'image-placeholder.svg'}
            alt={anime?.title}
            loading="lazy"
            decoding="async"
            className="w-full h-[320px] object-cover rounded"
          />
        )}

        <div className="mt-3">
          {isLoading ? (
            <Skeleton variant="rectangular" width={200} height={150} />
          ) : (
            <AnimeTrailer embedUrl={anime?.trailer?.embed_url} title={anime?.title} />
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <Typography variant="h4" className="mb-3">
          {isLoading ? <Skeleton width={300} /> : anime?.title}
        </Typography>

        <Collapse in={isSynopsisExpanded} timeout="auto">
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isSynopsisExpanded ? 'max-h-250' : 'max-h-30'
            }`}
          >
            <Typography variant="body1" className="text-gray-600">
              {isLoading ? <Skeleton width="100%" height={80} /> : (anime?.synopsis ?? '-')}
            </Typography>
          </div>
        </Collapse>

        {!isLoading && anime?.synopsis && anime?.synopsis?.length > 200 && (
          <Button variant="text" onClick={handleSynopsisClick} className="mt-2">
            {isSynopsisExpanded ? 'Скрыть' : 'Показать описание'}
          </Button>
        )}
      </div>
    </div>
  );
}
