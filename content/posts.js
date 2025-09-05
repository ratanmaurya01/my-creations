const posts = [
  {
    slug: "react-interview-essentials",
    title: "React Interview Essentials: Hooks, State & Performance",
    excerpt: "Quick guide to ace React interviews — from hooks & state to memoization and optimization.",
    category: "Interview Q&A",
    date: "2025-09-04",
    content: `This post covers the essentials you should know for React interviews: useState vs useReducer, useEffect pitfalls, memoization with React.memo and useMemo, virtualization for lists, and when to use Context vs Redux. We also touch on server components in Next.js and common anti‑patterns.`,
    takeaways: [
      "Explain state management trade‑offs with examples",
      "Avoid useEffect for data derivation; compute during render",
      "Memoize expensive components and list items when needed"
    ],
  },
  {
    slug: "nextjs-app-router-mental-model",
    title: "Next.js App Router: A Simple Mental Model",
    excerpt: "Understand layouts, server vs client components, and data fetching with server actions.",
    category: "Tech Stack",
    date: "2025-09-04",
    content: `The App Router introduces filesystem conventions (layout.js, page.js) and server/client boundaries. Keep components server‑first for performance, push interactivity to client components only where necessary, and co‑locate data fetching with components via async functions or server actions.`,
    takeaways: [
      "Prefer server components for faster loads",
      "Use loading.js and error.js for UX",
      "Leverage server actions for simple mutations"
    ],
  },
  {
    slug: "javascript-tips-for-production",
    title: "10 JavaScript Tips for Production",
    excerpt: "Small techniques that prevent big bugs: immutability, strict typing mindset, and robust error handling.",
    category: "JavaScript Tips",
    date: "2025-09-04",
    content: `Use defensive coding: validate inputs, handle promise rejections, and keep functions pure where possible. Prefer composition over inheritance, and treat async flows carefully with try/catch boundaries.`,
    takeaways: [
      "Validate external inputs at boundaries",
      "Keep async code readable with small functions",
      "Measure before optimizing"
    ],
  },
];

export default posts;
