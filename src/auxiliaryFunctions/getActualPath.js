export default function getActualPath(path) {
  const parts = path.split('/');
  const nonEmptyParts = parts.filter((part) => part !== '');
  return nonEmptyParts[nonEmptyParts.length - 1];
}
