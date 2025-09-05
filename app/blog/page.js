import Link from "next/link";
import posts from "@/content/posts";
export const metadata = { title: "Blog — Ratan" };
const categories = ["Tech Stack", "Interview Q&A", "JavaScript Tips", "React Best Practices", "Career Advice"];
export default function Blog() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map(c => (
            <Link key={c} href={`/blog/category/${encodeURIComponent(c)}`} className="text-sm border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1 whitespace-nowrap hover:shadow-soft">
              {c}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(p => (
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
