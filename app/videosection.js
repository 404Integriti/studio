"use client";

export default function VideoSection() {
  return (
    <div className="relative w-full overflow-hidden aspect-video">
      <iframe
        id="vimeo-video"
        src="https://player.vimeo.com/video/1098229096?h=d36f4a99a2&autoplay=1&muted=1&controls=1&loop=1&title=0&byline=0&portrait=0"
        frameBorder="0"
        title="Company overview video"
        aria-label="Company overview video"
        allow="autoplay; fullscreen"
        allowFullScreen
        data-ready="true"
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
