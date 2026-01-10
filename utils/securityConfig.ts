/**
 * Security middleware for development and production
 */

export const securityConfig = {
  // File upload restrictions
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedMimeTypes: [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp'
  ],
  
  // Content Security Policy
  csp: {
    'default-src': ["'self'"],
    'img-src': ["'self'", 'data:', 'https:'],
    'script-src': ["'self'", "'unsafe-inline'"],
    'style-src': ["'self'", "'unsafe-inline'"],
    'font-src': ["'self'"],
    'connect-src': ["'self'"],
    'frame-ancestors': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"]
  },

  // Rate limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  },

  // CORS configuration
  cors: {
    origin: process.env.NODE_ENV === 'production' 
      ? ['https://yourdomain.com'] 
      : ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
    optionsSuccessStatus: 200
  }
};

/**
 * Validates file type and size
 */
export const validateFile = (file: File): { valid: boolean; error?: string } => {
  // Check file size
  if (file.size > securityConfig.maxFileSize) {
    return {
      valid: false,
      error: `File size exceeds limit of ${securityConfig.maxFileSize / 1024 / 1024}MB`
    };
  }

  // Check MIME type
  if (!securityConfig.allowedMimeTypes.includes(file.type)) {
    return {
      valid: false,
      error: `File type ${file.type} is not allowed`
    };
  }

  // Check file extension
  const allowedExtensions = ['.png', '.jpg', '.jpeg', '.webp'];
  const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
  
  if (!allowedExtensions.includes(fileExtension)) {
    return {
      valid: false,
      error: `File extension ${fileExtension} is not allowed`
    };
  }

  return { valid: true };
};

/**
 * Generates CSP header string
 */
export const generateCSPHeader = (): string => {
  const directives = Object.entries(securityConfig.csp)
    .map(([key, values]) => `${key} ${values.join(' ')}`)
    .join('; ');
  
  return directives;
};
