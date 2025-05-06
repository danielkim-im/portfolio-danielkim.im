export default function HeaderBlock({ header }: { header: string }) {
  return (
    <div>
      <h2 className="mt-10 text-3xl">{header}</h2>
    </div>
  );
}
