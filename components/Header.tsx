'use client'

import Image from "next/image"
import Link from "next/link"
import NavDropdown from "@/components/NavDropdown"
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"


export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Image src="/stepworks-logo.png" alt="Stepworks" width={160} height={40}/>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {/* TODO: add actually links when those routes are added*/}
            <NavDropdown
              label="Services"
              links={[
                { label: "Detox and Residential", href: "/" },
                { label: "Intensive Outpatient", href: "/"}, 
                { label: "Sober Living", href: '/'}, 
                { label: "Medication Assited-Therapy (MAT)", href: '/'}, 
                { label: "PICC Line Program", href: '/'}    
               ]}
            />
            <NavDropdown
                label="Locations"
                links={[
                    { label: "Bowling Green", href: "/" }, 
                    { label: "E-town Crowne Pointe", href: "/" }, 
                    { label: "E-town Woodland Dr.", href: "/" }, 
                    { label: "London", href: "/" }, 
                    { label: "Nicholasville", href: "/" }, 
                    { label: "Paducah", href: "/" }, 
                ]}
            />
            <NavDropdown
                label="Locations"
                links={[
                    { label: "The Stepworks Story", href: "/" }, 
                    { label: "CARF Accreditation", href: "/" }, 
                    { label: "Accepted Insurances", href: "/" }, 
                    { label: "Frequently Asked Questions", href: "/" }, 
                    { label: "Meet Our Team", href: "/" }, 
                    { label: "Careers", href: "/" }, 
                ]}
            />     
            <NavDropdown
                label="Contact Us"
                links={[
                    { label: "Contact Us", href: '/' },
                    { label: "Medical Records Request", href: '/' },
                    { label: "Referral Info", href: '/' },
                ]}
            />
            <NavDropdown
                label="Blog"
                links={[
                    { label: "Blog/Media", href: '/' },
                    { label: "Doctor’s Notes by Tom Ingram ", href: '/' },
                ]}
            />
          </NavigationMenuList>

        </NavigationMenu>

        <a
          href="tel:8005459031"
          className="text-sm font-semibold text-brand-blue hover:text-primary transition-colors"
        >
          Call Today: (800) 545-9031
        </a>
      </div>
    </header>
  )
}
