
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row items-start mt-10 px-4 gap-12 -ml-24 lg:-ml-32">


  {/* Left Column */}
  <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 ml-0 -ml-4 lg:-ml-12">
    <h1 className="text-5xl font-bold text-white whitespace-nowrap mb-8">
      Christopher Mena
    </h1>

    <h2 className="text-2xl text-gray-400 mb-8">
      <span className="block">AI/ML Engineer</span>

      {/* Horizontal divider */}
      <span className="block border-t-4 border-gray-600 my-2 w-48 mt-4"></span>

      
    </h2>



    <p className="text-lg text-gray-300 italic mb-8">
      Building efficient, reliable AI systems for real-world use.
    </p>
  </div>

  {/* Right Column */}
{/* Right Column */}
  <div className="w-full lg:w-7/12 text-gray-300 space-y-6">

    {/* Intro Paragraph */}
    <p className="leading-relaxed text-gray-300">
      My work sits at the intersection of AI engineering and practical system design.
      I’m a builder by nature. I look at problems and see workflows, structure, and
      opportunities for improvement. I focus on clear ideas, clean execution, and
      solutions that scale. Whether I’m developing AI features, designing data workflows,
      or building full-stack tools, my priority is creating systems that are reliable,
      efficient, and purpose-driven.
    </p>

    {/* Capability List */}
    <ul className="list-disc list-inside space-y-2">
      <li>Designing applied AI systems using LLMs, computer vision (YOLOv8, OpenCV), OCR, and applied NLP workflows</li>
      <li>Building end-to-end machine learning and computer vision pipelines</li>
      <li>Data preprocessing, cleaning, feature engineering, and image processing</li>
      <li>Developing backend APIs and integrating AI into real products</li>
      <li>Full-stack engineering with React and Next.js</li>
      <li>Model evaluation, reliability checks, and performance validation</li>

    </ul>

    {/* Tools Line */}
      <p className="text-gray-400 text-sm">
        Tools: Python, Pandas, NumPy, Scikit-Learn, PyTorch, OpenCV, Tesseract OCR,
        YOLO models, FastAPI, React, Next.js, Tailwind CSS, Git, VS Code.
      </p>


    

  </div>



</section>

  );
}
