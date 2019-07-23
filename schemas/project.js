export default {
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug"
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }]
    }
  ]
};
