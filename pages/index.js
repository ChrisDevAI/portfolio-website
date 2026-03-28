// pages/index.js

export default function Home() {
  return (
    <section className="pt-4 px-6 max-w-4xl mx-auto space-y-10">
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-6 max-w-3xl leading-tight">
          Engineering Applied AI Systems That Ship
        </h1>

        <p className="body-text text-base md:text-lg text-gray-300 leading-relaxed">
          I build and deploy applied AI systems that combine computer vision, LLM workflows, and
          full-stack engineering into structured, practical applications. My focus is reliability,
          clear system design, and building solutions that work under real implementation
          constraints.
        </p>
      </div>

      <div>
        <ul className="body-text list-disc list-inside space-y-3 text-gray-300">
          <li>
            Architecting applied AI systems using LLMs, computer vision (YOLOv8, OpenCV), OCR, and
            NLP pipelines
          </li>
          <li>Designing end-to-end AI/ML workflows from data ingestion to deployment</li>
          <li>Data preprocessing, feature engineering, and performance optimization</li>
          <li>
            Building application APIs (FastAPI) that integrate AI models into usable software
            systems
          </li>
          <li>Full-stack engineering with React and Next.js</li>
          <li>Model evaluation, validation, and reliability testing</li>
        </ul>
      </div>

      <div>
        <p className="body-text text-gray-300 text-base">
          Python · PyTorch · scikit-learn · OpenCV · YOLO · Tesseract OCR · Pandas · NumPy · FastAPI
          · Next.js · React · Tailwind · Git
        </p>
      </div>
    </section>
  );
}
