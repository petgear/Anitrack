type AnimeTrailerProps = {
  embedUrl?: string;
  title?: string;
};

export default function AnimeTrailer({ embedUrl, title }: AnimeTrailerProps) {
  if (!embedUrl) return null;

  return (
    <div>
      <iframe
        src={embedUrl}
        title={title}
        width="100%"
        height="315"
        frameBorder={0}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
