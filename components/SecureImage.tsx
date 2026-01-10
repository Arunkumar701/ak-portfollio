/**
 * Secure Image Component with validation
 */
import React from 'react';

interface SecureImageProps {
  src: string;
  alt: string;
  className?: string;
  [key: string]: any;
}

const SecureImage: React.FC<SecureImageProps> = ({ src, alt, className, ...props }) => {
  // Basic validation - only allow image extensions
  const allowedExtensions = ['.png', '.jpg', '.jpeg', '.webp'];
  const ext = src.toLowerCase().substring(src.lastIndexOf('.'));
  
  if (!allowedExtensions.includes(ext)) {
    console.error(`Security: Invalid image extension: ${src}`);
    return (
      <div className={`bg-gray-800 border border-red-500 rounded-lg flex items-center justify-center ${className}`}>
        <span className="text-red-400 text-sm font-mono">INVALID_IMAGE</span>
      </div>
    );
  }
  
  return <img src={src} alt={alt} className={className} {...props} />;
};

export default SecureImage;
