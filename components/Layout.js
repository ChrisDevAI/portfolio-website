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
        <div className="flex flex-col md:flex-row md:items-center px-4 sm:px-6 md:px-20 gap-6">
          {/* Left: Identity (true left aligned) */}
          <Link href="/" className="flex flex-col leading-tight text-center md:text-left">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Christopher Mena
            </span>
            <span className="text-sm sm:text-base md:text-lg text-gray-400">
              Applied AI Systems Engineer
            </span>
          </Link>

          {/* Right: Everything else stays centered inside max width */}
          <div className="flex-1">
            <div className="max-w-5xl mx-auto md:-ml-12 md:mr-auto flex flex-col items-center">
              {/* Navigation */}
              <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 text-lg sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
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
              <div className="mt-3 md:mt-2">
                <a
                  href="/resume/Christopher_Mena_Resume.pdf"
                  download="Christopher_Mena_Resume.pdf"
                  className="inline-block px-5 sm:px-7 py-2 rounded-md bg-gray-700/60 border border-gray-500/40 hover:bg-gray-600/60 hover:border-gray-400/60 transition font-medium backdrop-blur-sm text-sm sm:text-base"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Container */}
      {/* Content Container */}
      <main className="flex-grow px-4 py-10">
        <div
          className={
            router.pathname === "/projects"
              ? "max-w-6xl mx-auto w-full"
              : "max-w-4xl mx-auto w-full"
          }
        >
          {children}
        </div>
      </main>

      <footer className="bg-gray-800 text-center p-4 text-sm text-gray-400 border-t border-gray-700">
        <p>© 2026 Christopher Mena</p>
      </footer>
    </div>
  );
}
