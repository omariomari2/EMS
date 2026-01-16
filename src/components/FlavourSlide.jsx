export default function FlavourSlide({ doseImg, packImg, alt }) {
  return (
    <div className="flavour-slide swiper-slide">
      <div className="flavour-slide-inner">
        <div data-inertia-item className="flavour-slide-dose">
          <img className="flavour-slide-dose-img" src={doseImg} width="723" height="615" alt={`chunky-flavour-${alt}-dose`} sizes="(max-width: 767px) 100vw, 723px" data-inertia-item-child loading="lazy" />
        </div>
        <div data-inertia-item className="flavour-slide-pack is-first">
          <img className="flavour-slide-pack-img" src={packImg} width="653" height="478" alt={`chunky-flavour-${alt}-pack`} sizes="(max-width: 653px) 100vw, 653px" data-inertia-item-child loading="lazy" />
        </div>
        <div data-inertia-item className="flavour-slide-pack is-second">
          <img className="flavour-slide-pack-img" src={packImg} width="653" height="478" alt={`chunky-flavour-${alt}-pack`} sizes="(max-width: 653px) 100vw, 653px" data-inertia-item-child loading="lazy" />
        </div>
      </div>
    </div>
  );
}
