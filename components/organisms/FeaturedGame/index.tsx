import GameItem from "../../molecules/GameItem"

export default function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured<br /> Games This Year
        </h2>
        <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up">
          <GameItem title="Super Mechs" category="Mobile" thumbnail="/assets/img/Thumbnail-1.png" />
          <GameItem title="Call of Duty: Modern" category="Mobile" thumbnail="/assets/img/Thumbnail-2.png" />
          <GameItem title="Mobile Legends" category="Mobile" thumbnail="/assets/img/Thumbnail-3.png" />
          <GameItem title="Clash of Clans" category="Mobile" thumbnail="/assets/img/Thumbnail-4.png" />
          <GameItem title="Valorant" category="Desktop" thumbnail="/assets/img/Thumbnail-5.png" />
        </div>
      </div>
    </section>
  )
}
