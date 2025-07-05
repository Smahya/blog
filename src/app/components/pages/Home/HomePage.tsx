import { PostsList } from "./PostsList";
import { RightColumn } from "./RightColumn/RightColumn";

import { Hero } from "./Hero";
import { PostsContentWrapper } from "../../PostsContentWrapper";
// import { LeftColumn } from "./LeftColumn/LeftColumn";

export function HomePage() {
  return (
    <>
      <Hero />

      <PostsContentWrapper>
        <PostsList />
        <RightColumn />
      </PostsContentWrapper>
    </>
  );
}
