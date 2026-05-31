import ImgLink from "@/components/ImgLink"

const socialLinks = [
  { src: "/x.svg", href: "https://twitter.com/stepworksUSA", label: "X" },
  { src: "/facebook-logo.svg", href: "https://www.facebook.com/stepworksUSA", label: "Facebook" },
  { src: "/linkedin-logo.svg", href: "http://www.linkedin.com/company/stepworks-recovery-centers-llc", label: "LinkedIn" },
  { src: "/youtube-logo.png", href: "https://www.youtube.com/c/stepworksUSA", label: "YouTube" },
  { src: "/google-logo.png", href: "https://google.com/+StepworksUSA", label: "Google" },
  { src: "/instagram-logo.png", href: "https://www.instagram.com/stepworksusa/", label: "Instagram" },
]


export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Stepworks Recovery Centers, LLC
        </span>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <ImgLink key={link.href} {...link} />
          ))}
        </div>
      </div>
    </footer>
  )
}
