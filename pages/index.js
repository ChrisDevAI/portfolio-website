export default function Home() {
  return (
    <section className="pt-32 px-6 max-w-4xl mx-auto space-y-10">
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-6 max-w-3xl leading-tight">
          Engineering Applied AI Systems That Ship
        </h1>

        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          I engineer and deploy production-ready AI systems — integrating model fine-tuning,
          computer vision, and LLM workflows into structured, full-stack architectures. My focus is
          reliability, performance, and measurable outcomes under real-world constraints.
        </p>
      </div>

      <div>
        <ul className="list-disc list-inside space-y-3 text-gray-300">
          <li>
            Architecting applied AI systems using LLMs, computer vision (YOLOv8, OpenCV), OCR, and
            NLP pipelines
          </li>
          <li>Designing end-to-end ML workflows from data ingestion to deployment</li>
          <li>Data preprocessing, feature engineering, and performance optimization</li>
          <li>
            Developing backend APIs (FastAPI) and integrating AI into production-ready applications
          </li>
          <li>Full-stack engineering with React and Next.js</li>
          <li>Model evaluation, validation, and reliability testing</li>
        </ul>
      </div>

      <div>
        <p className="text-gray-400 text-sm">
          Python · PyTorch · Scikit-Learn · OpenCV · YOLO · Tesseract OCR · Pandas · NumPy · FastAPI
          · Next.js · React · Tailwind · Git
        </p>
      </div>
    </section>
  );
}
