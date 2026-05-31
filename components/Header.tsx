'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import NavDropdown from "@/components/NavDropdown"
import { NavLink } from "@/components/NavDropdown"
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

interface NavSection {
  label: string
  links: [NavLink, ...NavLink[]]
}

// TODO: update hrefs when routes are added 
const navSections: NavSection[] = [
  {
    label: "Services",
    links: [
      { label: "Detox and Residential", href: "/" },
      { label: "Intensive Outpatient", href: "/" },
      { label: "Sober Living", href: "/" },
      { label: "Medication Assisted-Therapy (MAT)", href: "/" },
      { label: "PICC Line Program", href: "/" },
    ],
  },
  {
    label: "Locations",
    links: [
      { label: "Bowling Green", href: "/" },
      { label: "E-town Crowne Pointe", href: "/" },
      { label: "E-town Woodland Dr.", href: "/" },
      { label: "London", href: "/" },
      { label: "Nicholasville", href: "/" },
      { label: "Paducah", href: "/" },
    ],
  },
  {
    label: "About",
    links: [
      { label: "The Stepworks Story", href: "/" },
      { label: "CARF Accreditation", href: "/" },
      { label: "Accepted Insurances", href: "/" },
      { label: "Frequently Asked Questions", href: "/" },
      { label: "Meet Our Team", href: "/" },
      { label: "Careers", href: "/" },
    ],
  },
  {
    label: "Contact Us",
    links: [
      { label: "Contact Us", href: "/" },
      { label: "Medical Records Request", href: "/" },
      { label: "Referral Info", href: "/" },
    ],
  },
  {
    label: "Blog",
    links: [
      { label: "Blog/Media", href: "/" },
      { label: "Doctor's Notes by Tom Ingram", href: "/" },
    ],
  },
]

function MobileNav() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <Sheet>
      <SheetTrigger aria-label="Open menu" className="p-2">
        <Menu className="h-6 w-6 text-brand-charcoal" />
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <div className="border-b px-6 py-4">
          <Link href="/">
            <Image src="/stepworks-logo.png" alt="Stepworks" width={140} height={35} />
          </Link>
        </div>
        <nav className="flex flex-col">
          {navSections.map((section) => (
            <div key={section.label} className="border-b">
              <button
                onClick={() => setOpen(open === section.label ? null : section.label)}
                className="flex w-full items-center justify-between px-6 py-4 text-sm font-semibold text-brand-charcoal"
              >
                {section.label}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${open === section.label ? "rotate-180" : ""}`}
                />
              </button>
              {open === section.label && (
                <ul className="flex flex-col pb-2">
                  {section.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="block px-8 py-2 text-sm text-muted-foreground hover:text-brand-blue"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <a
            href="tel:8005459031"
            className="px-6 py-4 text-sm font-semibold text-brand-blue"
          >
            Call Today: (800) 545-9031
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Image src="/stepworks-logo.png" alt="Stepworks" width={160} height={40} />
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navSections.map((section) => (
                <NavDropdown key={section.label} label={section.label} links={section.links} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <a
            href="tel:8005459031"
            className="text-sm font-semibold text-brand-blue hover:text-primary transition-colors"
          >
            Call Today: (800) 545-9031
          </a>
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
