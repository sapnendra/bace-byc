import { Linkedin, Github } from "lucide-react";

interface SocialIconsProps {
  linkedin?: string;
  github?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

const containerSizeClasses = {
  sm: "p-2",
  md: "p-2.5",
  lg: "p-3",
};

export default function SocialIcons({
  linkedin,
  github,
  size = "md",
}: SocialIconsProps) {
  if (!linkedin && !github) return null;

  return (
    <div className="flex gap-2">
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={`${containerSizeClasses[size]} bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors`}
          aria-label="LinkedIn Profile"
        >
          <Linkedin className={sizeClasses[size]} />
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${containerSizeClasses[size]} bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors`}
          aria-label="GitHub Profile"
        >
          <Github className={sizeClasses[size]} />
        </a>
      )}
    </div>
  );
}
