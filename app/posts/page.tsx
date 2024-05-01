import Container from "@/app/components/blog/container";
import { HeroPost } from "@/app/components/blog/hero-post";
import { Intro } from "@/app/components/blog/intro";
import { MoreStories } from "@/app/components/blog/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Posts() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
