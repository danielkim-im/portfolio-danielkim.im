export default function LinkBlock({
  link,
  link_title,
}: {
  link: string;
  link_title: string;
}) {
  return (
    <div className="mt-2.5">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-blue-600 hover:underline"
      >
        {link_title}
      </a>
    </div>
  );
}
