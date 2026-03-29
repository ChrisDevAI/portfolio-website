// pages/index.js

export default function Home() {
  return (
    <section className="pt-4 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[1fr_1fr] gap-10 md:gap-16 items-start ml-0 md:ml-[-4rem]">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-6 max-w-3xl leading-tight">
            Engineering Applied AI Systems That Ship
          </h1>

          <p className="body-text text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
            I build production-minded AI systems that combine computer vision, NLP, LLM workflows,
            and full-stack engineering into practical applications. My focus is reliable system
            design, clear architecture, and tools that work under real implementation constraints.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">Technical Skills</h2>

          <ul className="body-text list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
            <li>
              <span className="font-semibold text-gray-100">Languages:</span> Python,
              TypeScript/JavaScript, SQL, C++, Java
            </li>
            <li>
              <span className="font-semibold text-gray-100">Backend:</span> FastAPI, REST APIs,
              Uvicorn, environment-based configuration
            </li>
            <li>
              <span className="font-semibold text-gray-100">AI/LLM Systems:</span> workflow
              experience with OpenAI ChatGPT, Google Gemini, and Anthropic Claude; prompt
              engineering, structured outputs, validation loops, information extraction
            </li>
            <li>
              <span className="font-semibold text-gray-100">ML/Data:</span> PyTorch, TensorFlow,
              NumPy, Pandas, scikit-learn, feature engineering, model training and evaluation,
              classification, dimensionality reduction, transformer fine-tuning
            </li>
            <li>
              <span className="font-semibold text-gray-100">Computer Vision:</span> OpenCV, YOLO,
              Tesseract OCR, object detection, bounding boxes, image preprocessing
            </li>
            <li>
              <span className="font-semibold text-gray-100">Data Visualization:</span> Matplotlib,
              Tableau
            </li>
            <li>
              <span className="font-semibold text-gray-100">Cloud:</span> AWS, Azure fundamentals
            </li>
            <li>
              <span className="font-semibold text-gray-100">Frontend/Tools:</span> React, Vite,
              Next.js, Tailwind CSS, responsive UI development, Git/GitHub
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
