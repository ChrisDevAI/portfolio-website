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
        <div className="flex items-center px-20">
          {/* Left: Identity (true left aligned) */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Christopher Mena
            </span>
            <span className="text-base md:text-lg text-gray-400">Applied AI Systems Engineer</span>
          </Link>

          {/* Right: Everything else stays centered inside max width */}
          <div className="flex-1">
            <div className="max-w-5xl -ml-12 mr-auto flex flex-col items-center">
              {/* Navigation */}
              <nav className="flex gap-10 text-3xl font-semibold mb-6">
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
                  href="/resume/Christopher_Mena_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-2 rounded-md bg-gray-700/60 border border-gray-500/40 
            hover:bg-gray-600/60 hover:border-gray-400/60 transition font-medium backdrop-blur-sm"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Container */}
      <main className="flex-grow px-4 py-10">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>

      <footer className="bg-gray-800 text-center p-4 text-sm text-gray-400 border-t border-gray-700">
        <p>© 2026 Christopher Mena</p>
      </footer>
    </div>
  );
}
