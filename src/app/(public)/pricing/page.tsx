import { Metadata } from 'next'
import { Check } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Pricing - Agile PM',
  description: 'Simple and transparent pricing for teams of all sizes.',
}

const plans = [
  {
    name: 'Free',
    description: 'Perfect for small teams getting started.',
    price: '$0',
    features: ['Up to 3 projects', 'Basic task management', 'Team collaboration', 'Email support'],
    href: '/sign-up',
    buttonText: 'Get Started',
  },
  {
    name: 'Pro',
    description: 'For growing teams that need more.',
    price: '$29',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Custom fields',
      'Priority support',
      'Team roles & permissions',
      'Audit logs',
    ],
    href: '/sign-up?plan=pro',
    buttonText: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    description: 'For organizations that need advanced features.',
    price: 'Custom',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantees',
      'Custom contracts',
      'On-premise option',
    ],
    href: '/contact',
    buttonText: 'Contact Sales',
  },
]

export default function PricingPage() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Simple Pricing
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose the plan that's right for your team.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-[85rem] gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              'relative rounded-lg border bg-background p-8',
              plan.featured && 'border-2 border-primary shadow-lg',
            )}
          >
            {plan.featured && (
              <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground">
                Most Popular
              </div>
            )}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
              <div className="space-y-2">
                <p className="text-4xl font-bold">{plan.price}</p>
                <p className="text-sm text-muted-foreground">per user/month</p>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" asChild>
                <Link href={plan.href}>{plan.buttonText}</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
