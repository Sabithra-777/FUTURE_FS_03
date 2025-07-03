export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10">
      <h1 className="text-4xl font-bold text-green-700">☕ Starbucks Rebrand</h1>
      <p className="mt-4 text-gray-600 text-lg">Explore our AI-generated menu page!</p>
      <a
        href="/menu"
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        View Menu
      </a>
    </main>
  );
}
