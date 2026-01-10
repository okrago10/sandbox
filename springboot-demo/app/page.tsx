export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
        <div className="space-y-6 p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Next.js Setup</h1>
            <p className="mt-2 text-gray-600">
              A modern Next.js 14 project with TypeScript and Tailwind CSS
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
              <h2 className="font-semibold text-gray-900">✨ Features</h2>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li>• Next.js 14 with App Router</li>
                <li>• TypeScript with strict mode</li>
                <li>• Tailwind CSS for styling</li>
                <li>• ESLint & Prettier configured</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="flex-1 rounded-lg border-2 border-gray-300 px-4 py-2 font-semibold text-gray-700 hover:border-gray-400 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="border-t pt-4 text-center text-xs text-gray-500">
            <p>Development environment ready to use</p>
          </div>
        </div>
      </div>
    </main>
  );
}
