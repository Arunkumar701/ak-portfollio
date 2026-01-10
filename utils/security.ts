/**
 * Security utilities for file validation and sanitization
 */

export const ALLOWED_IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp'];
export const ALLOWED_CERT_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

/**
 * Validates if a file extension is allowed for images
 */
export const isValidImageExtension = (filename: string): boolean => {
  const ext = filename.toLowerCase().substring(filename.lastIndexOf('.'));
  return ALLOWED_IMAGE_EXTENSIONS.includes(ext);
};

/**
 * Validates if a file extension is allowed for certificates
 */
export const isValidCertExtension = (filename: string): boolean => {
  const ext = filename.toLowerCase().substring(filename.lastIndexOf('.'));
  return ALLOWED_CERT_EXTENSIONS.includes(ext);
};

/**
 * Sanitizes file path to prevent directory traversal
 */
export const sanitizeFilePath = (filePath: string): string => {
  // Remove any directory traversal attempts
  return filePath.replace(/\.\./g, '').replace(/\\/g, '/');
};

/**
 * Validates and sanitizes image path
 */
export const validateImagePath = (imagePath: string): string => {
  const sanitized = sanitizeFilePath(imagePath);
  
  if (!isValidImageExtension(sanitized)) {
    console.error(`Security: Invalid image extension detected: ${imagePath}`);
    throw new Error(`Invalid image extension. Only ${ALLOWED_IMAGE_EXTENSIONS.join(', ')} are allowed.`);
  }
  
  return sanitized;
};

/**
 * Validates and sanitizes certificate path
 */
export const validateCertPath = (certPath: string): string => {
  const sanitized = sanitizeFilePath(certPath);
  
  if (!isValidCertExtension(sanitized)) {
    console.error(`Security: Invalid certificate extension detected: ${certPath}`);
    throw new Error(`Invalid certificate extension. Only ${ALLOWED_CERT_EXTENSIONS.join(', ')} are allowed.`);
  }
  
  return sanitized;
};

/**
 * Security headers for preventing content type attacks
 */
export const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Content-Security-Policy': "default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};

/**
 * Validates file content to prevent malicious uploads
 */
export const validateFileContent = (filename: string, content: string): boolean => {
  // Check for common malicious patterns
  const maliciousPatterns = [
    /<\?php/i,
    /<script/i,
    /javascript:/i,
    /vbscript:/i,
    /onload=/i,
    /onerror=/i,
    /eval\(/i,
    /exec\(/i,
    /system\(/i,
    /shell_exec\(/i
  ];

  // Check filename for suspicious patterns
  const suspiciousPatterns = [
    /\.php$/i,
    /\.phtml$/i,
    /\.php3$/i,
    /\.php4$/i,
    /\.php5$/i,
    /\.asp$/i,
    /\.aspx$/i,
    /\.jsp$/i,
    /\.exe$/i,
    /\.bat$/i,
    /\.cmd$/i,
    /\.sh$/i,
    /\.ps1$/i
  ];

  // Check if filename contains suspicious extensions
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(filename)) {
      console.error(`Security: Suspicious file extension detected: ${filename}`);
      return false;
    }
  }

  // Check content for malicious code
  for (const pattern of maliciousPatterns) {
    if (pattern.test(content)) {
      console.error(`Security: Malicious content detected in file: ${filename}`);
      return false;
    }
  }

  return true;
};
