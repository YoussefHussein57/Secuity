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
  // Vite-bundled imports already contain the base prefix in production builds.
  // Guard against double-prefixing: /App/assets/... → /App/App/assets/...
  const normalizedBase = base.replace(/\/$/, ''); // '/App/' → '/App'
  if (normalizedBase && path.startsWith(normalizedBase + '/')) return path;
  return `${base}${path.replace(/^\//, '')}`;
}
