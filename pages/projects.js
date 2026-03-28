// pages/projects.js

import Head from "next/head";

export default function Projects() {
  const projects = [
    {
      title: "Chess AI Tutor",
      href: "https://github.com/ChrisDevAI/chess-ai-tutor",
      image: "/screenshots/HeroChessAI.jpg",
      alt: "Chess AI Tutor Screenshot",
      bullets: [
        "Stockfish engine integration",
        "LLM-based explanation layer",
        "Snapshot position analysis",
        "Local-first inference design",
      ],
      inDevelopment: false,
    },
    {
      title: "Student Scheduler",
      href: "https://github.com/ChrisDevAI/student-scheduler-planner",
      image: "/screenshots/HeroStudentScheduler.jpg",
      alt: "Student Scheduler Screenshot",
      bullets: [
        "OCR pipeline with Tesseract",
        "Deterministic course code extraction",
        "Constraint-based schedule generation",
        "Full-stack implementation",
      ],
      inDevelopment: false,
    },
    {
      title: "LLM Fine-Tuning Project",
      href: null,
      image: "/screenshots/heroproject3.jpg",
      alt: "Fine-Tuning Project Screenshot",
      bullets: [
        "Curated training dataset design",
        "Domain-adaptive fine-tuning workflow",
        "Model evaluation and benchmarking",
        "Inference performance testing",
      ],
      inDevelopment: true,
    },
    {
      title: "AI Middleware Layer",
      href: null,
      image: "/screenshots/heroproject4.jpg",
      alt: "AI Middleware Project Screenshot",
      bullets: [
        "Software-domain vocabulary specialization",
        "False positive reduction framework",
        "Context calibration pipeline",
        "Precision / recall evaluation",
      ],
      inDevelopment: true,
    },
  ];

  return (
    <>
      <Head>
        <title>Projects | Christopher Mena</title>
        <meta
          name="description"
          content="Applied AI systems integrating machine learning and full-stack architecture."
        />
      </Head>

      <main className="px-4 sm:px-6 pt-4 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {projects.map((project, index) => {
            const card = (
              <div className="rounded-xl border border-gray-800 p-4 sm:p-6 hover:border-gray-600 transition min-h-[200px] sm:min-h-[220px] opacity-90">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="rounded-lg w-full sm:w-48 md:w-56 h-40 object-cover flex-shrink-0"
                  />

                  <div className="space-y-3 min-w-0 flex-1">
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold text-gray-100">{project.title}</h2>

                      {project.inDevelopment && (
                        <span className="inline-block w-fit text-xs px-2 py-1 rounded-md border border-gray-700 text-gray-400">
                          In Development
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2 text-gray-400 text-sm">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );

            const columnOffsetClass = index % 2 === 0 ? "md:-ml-6" : "";

            if (project.href) {
              return (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block ${columnOffsetClass}`}
                >
                  {card}
                </a>
              );
            }

            return (
              <div key={project.title} className={columnOffsetClass}>
                {card}
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
