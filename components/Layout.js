// Layout.js
import Link from "next/link";
import { useRouter } from "next/router";
import SocialIcons from "@/components/SocialIcons";

export default function Layout({ children }) {
  const router = useRouter();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-gray-100">
      <header className="bg-gray-800 py-4 border-b border-gray-700">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Navigation */}
          <nav className="flex gap-10 text-3xl font-semibold mb-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition ${
                  router.pathname === item.path
                    ? "text-white underline underline-offset-4"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <SocialIcons />

          {/* Download CV */}
          <div className="mt-2">
            <a
              href="/ChrisR-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-2 rounded-md bg-gray-700/60 border border-gray-500/40 
              hover:bg-gray-600/60 hover:border-gray-400/60 transition font-medium backdrop-blur-sm"


            >
              Download CV
            </a>
          </div>
        </div>
      </header>

      {/* Content Container */}
      <main className="flex-grow px-4 py-10">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>

      <footer className="bg-gray-800 text-center p-4 text-sm text-gray-400 border-t border-gray-700">
        <p>© 2025 Christopher Mena</p>
      </footer>
    </div>
  );
}
