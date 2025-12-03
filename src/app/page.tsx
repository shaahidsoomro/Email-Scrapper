export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#F8FAFC] to-white p-8">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 space-y-4">
          <h1 className="font-display text-5xl font-bold text-primary md:text-6xl">
            Quizzera
          </h1>
          <p className="text-xl text-secondary md:text-2xl">
            Pakistan's #1 MCQ & Assessment Engine
          </p>
        </div>

        <div className="mb-12 rounded-lg bg-white p-8 shadow-lg">
          <p className="mb-6 text-lg text-secondary">
            A Mentisera Vertical - Empowering Pakistan's Education
          </p>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6">
              <div className="mb-3 text-4xl">📚</div>
              <h3 className="mb-2 font-display text-lg font-semibold text-primary">
                Extensive MCQ Bank
              </h3>
              <p className="text-sm text-secondary">
                Comprehensive question libraries for all competitive exams
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <div className="mb-3 text-4xl">🤖</div>
              <h3 className="mb-2 font-display text-lg font-semibold text-primary">
                AI-Powered
              </h3>
              <p className="text-sm text-secondary">
                Automated MCQ generation using Mentis AI
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <div className="mb-3 text-4xl">📊</div>
              <h3 className="mb-2 font-display text-lg font-semibold text-primary">
                Smart Analytics
              </h3>
              <p className="text-sm text-secondary">
                Advanced performance tracking and insights
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              PPSC
            </span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              FPSC
            </span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              NTS
            </span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              SPSC
            </span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              HEC
            </span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              University Entry
            </span>
          </div>

          <p className="text-sm text-secondary">
            Project Status: <span className="font-semibold text-success">In Development</span>
          </p>
        </div>

        <div className="mt-12 text-sm text-secondary">
          <p>
            Built with ❤️ by{' '}
            <a
              href="https://mentisera.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-info hover:underline"
            >
              Mentisera
            </a>{' '}
            for Pakistan's Education Revolution
          </p>
        </div>
      </div>
    </main>
  )
}
