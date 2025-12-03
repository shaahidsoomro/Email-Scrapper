export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-8 py-16">
        <h1 className="mb-8 text-center font-display text-4xl font-bold text-primary">
          About Quizzera
        </h1>

        <div className="space-y-8 text-secondary">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-primary">Our Mission</h2>
            <p className="leading-relaxed">
              Quizzera is Pakistan's most powerful MCQ bank, online testing, and exam engine designed
              to help students succeed in competitive exams including PPSC, FPSC, NTS, SPSC, KPPSC,
              HEC, and University Entry Tests.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-primary">What We Offer</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-success">✓</span>
                <span>Extensive MCQ bank with thousands of verified questions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success">✓</span>
                <span>AI-powered question generation using Mentis AI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success">✓</span>
                <span>Smart analytics and performance tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success">✓</span>
                <span>Adaptive learning paths based on your performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-success">✓</span>
                <span>Institutional dashboards for schools and universities</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-primary">A Mentisera Vertical</h2>
            <p className="leading-relaxed">
              Quizzera is a product of Mentisera, Pakistan's leading education technology company.
              We are committed to revolutionizing education in Pakistan through innovative technology
              solutions.
            </p>
          </section>

          <section className="rounded-lg bg-primary/5 p-6">
            <h2 className="mb-4 text-2xl font-semibold text-primary">Contact Us</h2>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:support@quizzera.pk" className="text-info hover:underline">
                  support@quizzera.pk
                </a>
              </p>
              <p>
                <strong>Website:</strong>{' '}
                <a
                  href="https://quizzera.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-info hover:underline"
                >
                  quizzera.pk
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
