import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MissionSlideshow from "@/components/MissionSlideshow"

const services = [
  {
    title: "Detox and Residential Program",
    description:
      "Find comprehensive recovery services at our 30-day detox and residential program, or get help through withdrawal with short-stay detox only.",
    href: "/services/detox",
  },
  {
    title: "Intensive Outpatient Program (IOP)",
    description:
      "Learn important disease management and relapse prevention skills while attending three group therapy sessions and one individual therapy session a week.",
    href: "/services/iop",
  },
  {
    title: "Sober Living Program",
    description:
      "Manage your transition by living in our drug-free sober living apartments while attending IOP therapy sessions several times a week.",
    href: "/services/sober-living",
  },
  {
    title: "Medication-Assisted Treatment (MAT)",
    description:
      "Transition into recovery with the aid of physician-managed medications like Suboxone or Vivitrol while attending counseling sessions.",
    href: "/services/mat",
  },
]

const quickLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Frequently Asked Questions", href: "/about/faq" },
  { label: "Get Help for Your Family Member", href: "/contact" },
  { label: "Information on Casey's Law", href: "/contact" },
  { label: "Referral Information", href: "/contact/referrals" },
  { label: "What to Bring", href: "/contact" },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative bg-fixed bg-cover bg-center py-20 text-white"
        style={{ backgroundImage: "url('/stepworks-of-elizabethtown-residential-treatment-services-elizabethtown1.webp')" }}
      >
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 text-center">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Stepworks offers residential, detox, and outpatient addiction services across the state of Kentucky.
          </h1>
          <p className="mt-4 text-lg md:text-xl">Call today for your free consultation.</p>
          <Button
            render={<a href="tel:8005459031" />}
            size="lg"
            variant="secondary"
            className="mt-8 text-lg"
          >
            (800) 545-9031
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="h-16 w-full">
            <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-brand-charcoal">
            Find a recovery service that best fits your needs
          </h2>
          <p className="mt-3 text-muted-foreground">
            At Stepworks, we believe that there are many roads to recovery from addiction. We offer a variety of
            recovery programs across the state of Kentucky so that you and your family can choose the best recovery
            option for you.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.href} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link
                      href={service.href}
                      className="relative -mx-2 inline-block overflow-hidden rounded px-2 py-1 before:absolute before:inset-0 before:-translate-x-full before:bg-primary before:transition-transform before:duration-[600ms] hover:before:translate-x-0 hover:text-white"
                    >
                      <span className="relative">{service.title}</span>
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Screening CTA */}
      <section className="bg-brand-blue py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold">Call today to get your free addiction screening!</h2>
          <p className="mt-4 text-lg">
            If you or someone you love is struggling with addiction, give us a call! We&apos;ll walk you through a
            free addiction screening and recommend an appropriate level of care. Recovery can begin today!
          </p>
          <Button
            render={<a href="tel:8005459031" />}
            size="lg"
            variant="secondary"
            className="mt-8 text-lg"
          >
            (800) 545-9031
          </Button>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-brand-charcoal">Our Mission</h2>
              <p className="mt-4 text-xl text-muted-foreground">
                We help people hurt by addiction reclaim their dignity and build a better life.
              </p>
              <blockquote className="mt-8 border-l-4 border-primary pl-6">
                <p className="text-lg italic text-brand-charcoal">
                  &ldquo;No one wants to be an addict when they grow up. Our job is to help people recover the life that
                  they were always meant to have before addiction stole it from them.&rdquo;
                </p>
                <footer className="mt-3 text-sm font-semibold text-muted-foreground">
                  Tom Ingram, MD &ndash; Founder &amp; CEO
                </footer>
              </blockquote>
            </div>
            <div className="w-full lg:w-1/2">
              <MissionSlideshow />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-brand-charcoal">Quick Links</h2>
          <ul className="mt-6 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-primary underline-offset-4 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-lg text-brand-charcoal">
            Stepworks accepts most commercial and Kentucky Medicaid providers.
          </p>
          <p className="mt-2 text-muted-foreground">
            For more information, please visit our{" "}
            <Link href="/about/insurance" className="text-primary underline-offset-4 hover:underline">
              accepted insurance page
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
