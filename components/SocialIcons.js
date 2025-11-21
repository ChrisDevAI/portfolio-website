// components/SocialIcons.js
import { FaGithub, FaLinkedin, FaXTwitter, FaMedium, FaChessBishop } from "react-icons/fa6";

export default function SocialIcons() {
  return (
    <div className="flex justify-center gap-8 mb-8 text-3xl text-gray-400">
      <a href="https://www.linkedin.com/in/chrisdevai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin className="hover:text-white transition" />
      </a>
      <a href="https://github.com/ChrisDevAI" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub className="hover:text-white transition" />
      </a>
      <a href="https://medium.com/@ChrisDevAI" target="_blank" rel="noopener noreferrer" aria-label="Medium">
        <FaMedium className="hover:text-white transition" />
      </a>
      <a href="https://x.com/ChrisDevAI" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter">
        <FaXTwitter className="hover:text-white transition" />
      </a>
      <a href="https://www.chess.com/member/helmsdeepanalytics" target="_blank" rel="noopener noreferrer" aria-label="Chess.com">
        <FaChessBishop className="text-gray-400 hover:text-white transition" />
      </a>
      
    </div>
  );
}
