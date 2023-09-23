import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FooterItem from '../../molecules/FooterItem'

export default function Footer() {

  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="/" className="mb-30">
                <Image src={"/assets/icon/logo.svg"} width={60} height={60} alt='logo' />
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">StoreGG membantu gamers<br /> untuk menjadi
                pemenang sejati</p>
              <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterItem title='Company' navLink={[
                  { name: 'About Us', href: '/about' },
                  { name: 'Press Release', href: '/#' },
                  { name: 'Terms of Use', href: '/#' },
                  { name: 'Privacy & Policy', href: '/#' },
                ]} />
                <FooterItem title='Support' navLink={[
                  { name: 'Refund Policy', href: '/about' },
                  { name: 'Unlock Rewards', href: '/#' },
                  { name: 'Live Chatting', href: '/#' },
                ]} />
                <FooterItem title='Connect' navLink={[
                  { name: 'hi@store.gg', href: '/about' },
                  { name: 'team@store.gg', href: '/#' },
                  { name: 'Pasific 12, Jakarta Selatan', href: '/#' },
                  { name: '021 - 1122 - 9090', href: '/#' },
                ]} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
