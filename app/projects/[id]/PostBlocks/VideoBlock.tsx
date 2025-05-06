export default function VideoBlock({ video_src }: { video_src: string }) {
  return (
    <div>
      <video width="320" height="240" controls preload="metadata">
        <source src={video_src} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
