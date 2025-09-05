export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container py-6 text-sm text-gray-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Ratan. All rights reserved.</p>
        <p className="opacity-75">Built with Next.js & Tailwind</p>
      </div>
    </footer>
  );
}
