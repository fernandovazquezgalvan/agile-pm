import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Agile PM',
  description: 'Simple and transparent pricing for teams of all sizes.',
}

export default function PricingPage() {
  return (
    <div className="py-8 md:py-12">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Simple, Transparent Pricing</h1>
        <p className="text-muted-foreground">Choose the plan that&apos;s right for your team.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="mb-2 text-xl font-bold">Free</h3>
          <p className="mb-4 text-muted-foreground">Perfect for small teams getting started</p>
          <div className="mb-4">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <ul className="mb-6 space-y-2 text-muted-foreground">
            <li>Up to 3 projects</li>
            <li>Basic task management</li>
            <li>Team collaboration</li>
            <li>Email support</li>
          </ul>
          <button className="w-full rounded-md bg-primary px-4 py-2 text-primary-foreground">
            Get Started
          </button>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="mb-2 text-xl font-bold">Pro</h3>
          <p className="mb-4 text-muted-foreground">For growing teams needing more</p>
          <div className="mb-4">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <ul className="mb-6 space-y-2 text-muted-foreground">
            <li>Unlimited projects</li>
            <li>Advanced task management</li>
            <li>Team collaboration</li>
            <li>Priority support</li>
            <li>Custom fields</li>
            <li>Advanced reporting</li>
          </ul>
          <button className="w-full rounded-md bg-primary px-4 py-2 text-primary-foreground">
            Upgrade Now
          </button>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="mb-2 text-xl font-bold">Enterprise</h3>
          <p className="mb-4 text-muted-foreground">For large organizations</p>
          <div className="mb-4">
            <span className="text-4xl font-bold">Custom</span>
          </div>
          <ul className="mb-6 space-y-2 text-muted-foreground">
            <li>Everything in Pro</li>
            <li>Custom integrations</li>
            <li>Dedicated support</li>
            <li>SLA guarantees</li>
            <li>Custom training</li>
            <li>On-premise option</li>
          </ul>
          <button className="w-full rounded-md bg-primary px-4 py-2 text-primary-foreground">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  )
}
