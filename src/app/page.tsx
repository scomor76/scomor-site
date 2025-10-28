import { Hello } from "@/components/Hello";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl p-10">
        <h1 className="text-4xl font-extrabold">ScoMor Labs</h1>
        <p className="mt-4 text-lg">Next.js + Tailwind is live.</p>
        <Hello />
      </div>
    </main>
  );
}
