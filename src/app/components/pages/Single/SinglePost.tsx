"use client";

import { useParams } from "next/navigation";
import { allPosts } from ".contentlayer/generated";
import * as cheerio from "cheerio";
import { RenderContent } from "./RenderContent";
import { Text } from "@/components";
import { estimateReadingTime, formatDate } from "@/utils/helpers";
import ClockIcon from "@/assets/icons/clock.svg";

export function SinglePostPage() {
  const params = useParams();

  const post = allPosts.find((post) => post.slug === params.slug);

  const $ = cheerio.load(post?.body.html!);
  return (
    <main className="w-full mb-20">
      <div className="app-bg-secondary py-12">
        <div className="container centralize-content">
          <Text className="text-4xl md:text-5xl font-bold mb-4">
            {post?.header}
          </Text>

          <div className="flex flex-col xs:flex-row xs:items-center gap-2">
            <Text className="text-lg text-gray-600 mr-4 font-bold">
              {post?.author}
            </Text>
            <div className="flex items-center gap-2">
              <Text className="text-lg text-gray-600 flex items-center gap-2">
                <ClockIcon />
                {estimateReadingTime(post?.body?.html?.length!)} mins Read
              </Text>{" "}
              <span className="text-gray-600">•</span>
              <Text className="text-lg text-gray-600">
                {formatDate(post?.date!)}
              </Text>
            </div>
          </div>

          {/* <Image src={post?.thumbnail} alt="" width={1000} height={1000} /> */}
        </div>
      </div>
      <div className="centralize-content">
        <RenderContent post={$} />
      </div>
    </main>
  );
}
