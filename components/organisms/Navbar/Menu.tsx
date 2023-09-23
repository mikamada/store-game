import Link from "next/link";
import { usePathname } from 'next/navigation'

const navLink = [
  {
    href: "/",
    title: "Home"
  },
  {
    href: "/games",
    title: "Games"
  },
  {
    href: "/rewards",
    title: "Rewards"
  },
  {
    href: "/discover",
    title: "Discover"
  },
  {
    href: "/global-rank",
    title: "Global Rank"
  },
]

export default function Menu() {
  const pathname = usePathname();

  return (
    <>
      {navLink.map((link, i) => {
        const isActive = pathname === link.href;
        return <li className="nav-item my-auto" aria-current="page" key={i}>
          <Link href={link.href} className={`nav-link ${isActive ? 'active' : ""}`}>
            {link.title}
          </Link>
        </li>
      })}
    </>
  )
}
