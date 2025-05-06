export default function ImageBlock({ image_src }: { image_src: string }) {
  return (
    <div className="mt-5 mb-5">
      <img
        src={image_src}
        className="max-w-[75%] mx-auto rounded-lg bg-gray-200 object-cover lg:aspect-auto"
      />
    </div>
  );
}
