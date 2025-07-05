"use client";

import { Text } from "@/components";
import { allPosts, Post } from ".contentlayer/generated";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/Badge";

export function PostsList() {
  const router = useRouter();

  const gotToPost = (id: string) => {
    router.push(`/${id}`);
  };

  return (
    <div className="container mx-auto">
      <div className="grid gap-8">
        {allPosts.map((post) => (
          <BlogsCard
            gotToPost={gotToPost}
            key={post._raw.flattenedPath}
            post={post}
          />
        ))}
      </div>
    </div>
  );
}

const BlogsCard = ({
  post,
  gotToPost,
}: {
  post: Post;
  gotToPost: (id: string) => void;
}) => {
  return (
    <div className="grid sm:grid-cols-[1.8fr_4fr] app-ui-bg rounded-xl overflow-hidden shadow-sm app-border">
      <div className="flex items-center justify-start sm:justify-center px-6 sm:px-2 text-left sm:text-center  bg-blue-50 dark:bg-blue-primary min-h-40">
        <Text variant="h3">{post.header}</Text>
      </div>
      <div className="grid grid-rows-[max-content_1fr_max-content] p-6">
        <button
          className="text-xl font-bold mb-2 hover:underline text-left w-max whitespace-pre-wrap"
          onClick={() => gotToPost(post._raw.flattenedPath)}
        >
          {post.title}
        </button>
        <p className="text-gray-600 dark:text-neutral-400 mb-4">
          {post.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};
