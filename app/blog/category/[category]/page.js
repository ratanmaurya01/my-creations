import Link from "next/link";
import posts from "@/content/posts";

export function generateStaticParams() {
  const cats = Array.from(new Set(posts.map(p => p.category)));
  return cats.map(c => ({ category: c }));
}

export default function CategoryPage({ params }) {
  const decoded = decodeURIComponent(params.category);
  const filtered = posts.filter(p => p.category === decoded);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Category: {decoded}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-soft transition block">
            <div className="aspect-video rounded-xl bg-gray-100 dark:bg-gray-900 mb-4" />
            <div className="text-xs text-gray-500 mb-1">{p.category}</div>
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
