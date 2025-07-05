import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    header: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    thumbnail: { type: "string", required: true },
    author: { type: "string", required: true },
    readingTime: { type: "string", required: false },
  },
  computedFields: {
    slug: { type: "string", resolve: (post) => post._raw.flattenedPath },
    // url: {
    //   type: "string",
    //   resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    // },
  },
}));

export default makeSource({ contentDirPath: "posts", documentTypes: [Post] });
