export default function slugify(input) {
  return input
    .toLowerCase()
    .replace(/\s|\/+/g, '-')
    .slice(0, 200)
}
