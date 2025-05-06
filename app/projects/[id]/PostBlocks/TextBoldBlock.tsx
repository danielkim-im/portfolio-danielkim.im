export default function TextBoldBlock({ text }: { text: string }) {
  return (
    <div>
      <p className="mt-2.5 font-bold">{text}</p>
    </div>
  );
}
