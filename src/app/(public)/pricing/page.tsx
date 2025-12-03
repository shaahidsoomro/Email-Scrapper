export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: 0,
      period: 'forever',
      features: [
        '50 MCQs per month',
        'Basic practice mode',
        'Limited analytics',
        'Community support',
      ],
      highlighted: false,
    },
    {
      name: 'Premium Monthly',
      price: 499,
      period: 'per month',
      features: [
        'Unlimited MCQs',
        'All quiz modes',
        'Advanced analytics',
        'Certificate generation',
        'Priority support',
      ],
      highlighted: true,
    },
    {
      name: 'Premium Annual',
      price: 4999,
      period: 'per year',
      features: [
        'Unlimited MCQs',
        'All quiz modes',
        'Advanced analytics',
        'Certificate generation',
        'Priority support',
        '2 months free',
      ],
      highlighted: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-display text-4xl font-bold text-primary">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-secondary">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border p-8 ${
                plan.highlighted
                  ? 'border-primary bg-primary/5 shadow-lg'
                  : 'border-gray-200 bg-card'
              }`}
            >
              <h3 className="mb-2 text-2xl font-bold text-primary">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">
                  PKR {plan.price.toLocaleString()}
                </span>
                <span className="text-secondary"> / {plan.period}</span>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-success">✓</span>
                    <span className="text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-md px-4 py-2 font-semibold ${
                  plan.highlighted
                    ? 'bg-primary text-white hover:bg-primary-hover'
                    : 'border border-primary text-primary hover:bg-primary/5'
                }`}
              >
                {plan.price === 0 ? 'Get Started' : 'Subscribe Now'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg border bg-card p-8 text-center">
          <h2 className="mb-4 text-2xl font-semibold text-primary">
            Need a plan for your institution?
          </h2>
          <p className="mb-6 text-secondary">
            We offer custom pricing for schools, colleges, and universities.
          </p>
          <a
            href="mailto:sales@quizzera.pk"
            className="inline-block rounded-md bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-hover"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  )
}
