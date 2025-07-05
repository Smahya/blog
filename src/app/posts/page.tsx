import { Text } from "@/components";
import { PostsList } from "../components/pages/Home/PostsList";
import { allPosts } from "@contentlayer/generated";

export default function PostsPage() {
  return (
    <main className="py-16 container">
      <Text variant="h1" className="mb-4">
        All Posts ( {allPosts.length} )
      </Text>

      <div className="centralize-content mt-16">
        <PostsList />
      </div>
    </main>
  );
}
