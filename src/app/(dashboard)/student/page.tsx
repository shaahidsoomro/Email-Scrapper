export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary">Student Dashboard</h1>
          <p className="mt-2 text-secondary">
            Welcome back! Track your progress and continue learning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Stats Cards */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary">Total Quizzes</p>
                <p className="mt-1 text-3xl font-bold text-primary">24</p>
              </div>
              <div className="text-4xl">📝</div>
            </div>
            <p className="mt-2 text-xs text-success">+3 this week</p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary">Average Score</p>
                <p className="mt-1 text-3xl font-bold text-primary">78%</p>
              </div>
              <div className="text-4xl">📊</div>
            </div>
            <p className="mt-2 text-xs text-success">+5% improvement</p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary">Study Streak</p>
                <p className="mt-1 text-3xl font-bold text-primary">7 days</p>
              </div>
              <div className="text-4xl">🔥</div>
            </div>
            <p className="mt-2 text-xs text-success">Keep it up!</p>
          </div>
        </div>

        {/* Recent Quizzes */}
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold text-primary">Recent Quizzes</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border bg-card p-4 shadow-sm"
              >
                <div>
                  <h3 className="font-semibold text-primary">PPSC General Knowledge Quiz {i}</h3>
                  <p className="text-sm text-secondary">Completed 2 days ago</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-success">85%</p>
                  <p className="text-xs text-secondary">17/20 correct</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Quizzes */}
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold text-primary">Recommended for You</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="font-semibold text-primary">NTS Practice Test {i}</h3>
                <p className="mt-2 text-sm text-secondary">
                  50 questions • 60 minutes
                </p>
                <button className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover">
                  Start Quiz
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
