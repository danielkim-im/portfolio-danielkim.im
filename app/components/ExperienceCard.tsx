"use client";

type Experience = {
  id: string;
  title: string;
  company: string;
  description: string;
  start_date: string;
  end_date: string | null;
  location: string;
};

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <main className="p-5 hover:shadow-md hover:backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ease-in-out rounded-lg relative">
      <div className="flex overflow-hidden cursor-pointer gap-5 pt-5 pb-5">
        <div className="w-1/4">
          <p style={{ fontWeight: "bold" }}>{experience.location}</p>
          <p>
            {formatMonthYear(experience.start_date)} -{" "}
            {formatMonthYear(experience.end_date)}
          </p>
        </div>
        <div className="w-3/4 ml-auto">
          <h4 style={{ fontWeight: "bold" }}>{experience.company}</h4>
          <h4>{experience.title}</h4>

          <p>{experience.description}</p>
        </div>
      </div>
    </main>
  );
}

const formatMonthYear = (dateStr: string | null) => {
  if (!dateStr) return "Present";
  const date = new Date(dateStr);

  const month = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.getFullYear();

  return `${month} ${year}`;
};
