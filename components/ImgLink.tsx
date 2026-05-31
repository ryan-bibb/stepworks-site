import Image from "next/image"

interface ImgLinkProps {
  src: string
  href: string
  label: string
}

export default function ImgLink({ src, href, label }: ImgLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      className="transition-transform hover:scale-110"
    >
      <Image src={src} alt={label} width={24} height={24} />
    </a>
  )
}
