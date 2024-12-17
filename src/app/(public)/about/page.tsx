import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Agile PM',
  description: 'Learn more about Agile PM and our mission.',
}

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          About Agile PM
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Empowering teams to deliver better projects, faster.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-[58rem] space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            We believe in making project management simple and effective. Our platform is built to
            help teams collaborate, track progress, and deliver results in an agile way.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Why Choose Agile PM?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-bold">Simple & Intuitive</h3>
              <p className="text-sm text-muted-foreground">
                Our platform is designed to be easy to use while providing powerful features for
                project management.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Built for Agile</h3>
              <p className="text-sm text-muted-foreground">
                Specifically crafted for teams following agile methodologies, with support for
                sprints and iterations.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Team Focused</h3>
              <p className="text-sm text-muted-foreground">
                Collaboration tools that help your team work together effectively and stay aligned.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Data Driven</h3>
              <p className="text-sm text-muted-foreground">
                Make informed decisions with comprehensive analytics and reporting features.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
