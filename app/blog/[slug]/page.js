import posts from "@/content/posts";

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export default function PostPage({ params }) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return <div>Post not found</div>;
  return (
    <article className="prose dark:prose-invert max-w-none container-prose">
      <p className="text-sm text-gray-500">{post.category} • {post.date}</p>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <h3>Key Takeaways</h3>
      <ul>
        {post.takeaways.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </article>
  );
}
