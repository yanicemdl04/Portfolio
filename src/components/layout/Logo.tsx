import React from 'react';
import { Code2 } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-8" }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center rounded-full bg-primary/20`}>
      <Code2 className="text-background-400 dark:text-primary" size={24} />
    </div>
  );
};

export default Logo;