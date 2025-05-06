export default function TextBlock({ text }: { text: string }) {
  return (
    <div>
      <p className="mt-2.5">{text}</p>
    </div>
  );
}
