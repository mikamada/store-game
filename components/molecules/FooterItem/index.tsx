import React from 'react'
import Link from 'next/link'

interface NavLink {
  name: string;
  href: string;
}

interface FooterItemProps {
  title: string;
  navLink: NavLink[];
}

export default function FooterItem(props: Partial<FooterItemProps>) {
  const { title, navLink } = props

  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        {navLink?.map((item, i) => <li className="mb-6">
          <Link key={i} href={`${item.href}`} className="text-lg color-palette-1 text-decoration-none">{item.name}</Link>
        </li>)}
      </ul>
    </div>
  )
}
