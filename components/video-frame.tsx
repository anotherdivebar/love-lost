export function VideoFrame() {
  return (
    <div className="video-shell">
      <div className="video-rail" aria-hidden="true">
        <span>Watch</span>
        <span>01 / 01</span>
      </div>
      <div className="video-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/_fLfkVS4WWk?rel=0"
          title="Love Lost featured video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="video-caption">
        <span>Featured video</span>
        <span>Love Lost / Official</span>
      </div>
    </div>
  );
}
