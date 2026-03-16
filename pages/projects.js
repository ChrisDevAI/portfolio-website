import Head from "next/head";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Christopher Mena</title>
        <meta
          name="description"
          content="Applied AI systems integrating machine learning and full-stack architecture."
        />
      </Head>

      <main className="px-6 pt-4 pb-24">
        {/* Positioning Canvas */}
        <div className="relative max-w-6xl h-[900px]">
          {/* Chess AI Tutor */}
          <a
            href="https://github.com/ChrisDevAI/chess-ai-tutor"
            target="_blank"
            rel="noopener noreferrer"
            className="group block absolute left-[-300px] top-[0px]"
          >
            <div className="rounded-xl border border-gray-800 p-6 hover:border-gray-600 transition w-[600px] h-[200px]">
              <div className="flex gap-6 items-start">
                <img
                  src="/screenshots/HeroChessAI.jpg"
                  alt="Chess AI Tutor Screenshot"
                  className="rounded-lg w-64 h-40 object-cover"
                />

                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-gray-100 group-hover:text-white transition">
                    Chess AI Tutor
                  </h2>

                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>Stockfish engine integration</li>
                    <li>LLM-based explanation layer</li>
                    <li>Snapshot position analysis</li>
                    <li>Local-first inference design</li>
                  </ul>
                </div>
              </div>
            </div>
          </a>

          {/* Student Scheduler */}
          <a
            href="https://github.com/ChrisDevAI/student-scheduler-planner"
            target="_blank"
            rel="noopener noreferrer"
            className="group block absolute left-[520px] top-[0px]"
          >
            <div className="rounded-xl border border-gray-800 p-6 hover:border-gray-600 transition w-[600px] h-[200px]">
              <div className="flex gap-6 items-start">
                <img
                  src="/screenshots/HeroStudentScheduler.jpg"
                  alt="Student Scheduler Screenshot"
                  className="rounded-lg w-64 h-40 object-cover"
                />

                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-gray-100 group-hover:text-white transition">
                    Student Scheduler
                  </h2>

                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>OCR pipeline with Tesseract</li>
                    <li>Deterministic course code extraction</li>
                    <li>Constraint-based schedule generation</li>
                    <li>Full-stack implementation</li>
                  </ul>
                </div>
              </div>
            </div>
          </a>

          {/* Fine-Tuning Project */}
          <div className="absolute left-[-300px] top-[260px]">
            <div className="rounded-xl border border-gray-800 p-6 w-[600px] h-[220px] opacity-90">
              <div className="flex gap-6 items-start">
                <img
                  src="/screenshots/heroproject3.jpg"
                  alt="Fine-Tuning Project Screenshot"
                  className="rounded-lg w-64 h-40 object-cover"
                />

                <div className="space-y-3">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-gray-100 whitespace-nowrap">
                      LLM Fine-Tuning Project
                    </h2>
                    <span className="inline-block w-fit text-xs px-2 py-1 rounded-md border border-gray-700 text-gray-400">
                      In Development
                    </span>
                  </div>

                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>Curated training dataset design</li>
                    <li>Domain-adaptive fine-tuning workflow</li>
                    <li>Model evaluation and benchmarking</li>
                    <li>Inference performance testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* AI Middleware */}
          <div className="group block absolute left-[520px] top-[260px]">
            <div className="rounded-xl border border-gray-800 p-6 w-[600px] h-[220px] opacity-90">
              <div className="flex gap-6 items-start">
                <img
                  src="/screenshots/heroproject4.jpg"
                  alt="AI Middleware Project Screenshot"
                  className="rounded-lg w-64 h-40 object-cover"
                />

                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-gray-100 group-hover:text-white transition">
                    AI Middleware Layer
                  </h2>
                  <span className="text-xs px-2 py-1 rounded-md border border-gray-700 text-gray-400">
                    In Development
                  </span>

                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>Software-domain vocabulary specialization</li>
                    <li>False positive reduction framework</li>
                    <li>Context calibration pipeline</li>
                    <li>Precision / recall evaluation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
