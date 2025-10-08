import React from "react";
import ExperienceCard from "@/app/Components/ExperienceCard/ExperienceCard";

export default function Experience() {
  const experiences = [
    {
      role: "Technical Engineer",
      company: "ECISS (Egyptian Company for Industrial & Scientific Services)",
      duration: "2025 – Present",
      description:
        "Worked as a Technical Engineer handling device installation, maintenance, and customer training across multiple scientific and industrial devices.",
      image: "/ECISS_logo.png",
    },
    {
      role: "Frontend Development Diploma",
      company: "Route Academy",
      duration: "2025",
      description:
        "Completed a professional diploma in Frontend Development, gaining hands-on experience in React.js, Next.js, TailwindCSS, and modern web practices.",
      image: "/Route.png",
    }, 
    {
      role: "Frontend Developer Intern",
      company: "Penta-B Co.",
      duration: "Summer 2023",
      description:
        "Developed frontend components for web applications using React.js and TailwindCSS, ensuring responsiveness and clean design.",
      image: "/PentaB.jpg",
    },
    {
      role: "Volunteer",
      company: "Resala Organization",
      duration: "2016 – 2021",
      description:
        "Contributed to community service and charity events, gaining valuable teamwork and organizational experience.",
      image: "/Resala.png",
    },   
  ];

  return (
    <section className="relative py-20 px-6 bg-[url('/bg1.jpg')] bg-center bg-cover bg-fixed">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-500 mb-12 text-center">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              {...exp}
              direction={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
