/**
 * assetUrl(path)
 * Prepends Vite's BASE_URL to local asset paths so they work
 * both locally (base: '/') and when deployed in a subfolder (base: '/App').
 *
 * External URLs (http/https/data:) are returned unchanged.
 */
export function assetUrl(path) {
  if (!path) return path;
  if (path.startsWith('http') || path.startsWith('//') || path.startsWith('data:')) return path;
  const base = import.meta.env.BASE_URL; // '/' locally, '/App/' on server
  return `${base}${path.replace(/^\//, '')}`;
}
