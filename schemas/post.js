export default {
  title: "Post",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    { title: "Slug", name: "slug", type: "slug" },
    { title: "Date", name: "date", type: "date" },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }]
    }
  ]
};
