import Link from "next/link"
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export interface NavLink {
  label: string
  href: `/${string}`
}

export interface NavDropdownProps {
  label: string
  links: [NavLink, ...NavLink[]]
}

export default function NavDropdown({ label, links }: NavDropdownProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="w-48 p-2">
          {links.map((link) => (
            <li key={link.href}>
              <NavigationMenuLink>
                <Link href={link.href} className="block rounded px-3 py-2 text-sm hover:bg-muted">
                  {link.label}
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
