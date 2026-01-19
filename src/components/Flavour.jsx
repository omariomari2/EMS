import FlavourSlide from './FlavourSlide.jsx';
import FlavourContentSlide from './FlavourContentSlide.jsx';

export default function Flavour() {
  const slides = [
    { doseImg: 'https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c958d0422452a42640ce1a_slider-flavour-strawberry-dose.webp', packImg: 'https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c958d08fd58d9f97c0a559_slider-flavour-strawberry-pack.webp', alt: 'strawberry' },
    { doseImg: 'https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c9bd8833449d96f96a8b2f_slider-flavour-fudge-brownie-dose.webp', packImg: 'https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c9bd899ab270ca74992378_slider-flavour-fudge-brownie-pack.webp', alt: 'fudge-brownie' },
    { doseImg: 'https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c9bd89c0ba63f9f1a0474f_slider-flavour-vanilla-choc-chip-dose.webp', packImg: 'https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c9bd8966162a74314fbec6_slider-flavour-vanilla-choc-chip-pack.webp', alt: 'vanilla-choc-chip' },
    { doseImg: 'https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c9be3296b7aa51aad8dd5d_slider-flavour-salted-caramel-dose.webp', packImg: 'https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c9bd886d19ccf79464c844_slider-flavour-salted-caramel-pack.webp', alt: 'salted-caramel' },
    { doseImg: 'https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c9bd88dfdd73be537ddc99_slider-flavour-vanilla-perfection-dose.webp', packImg: 'https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c9bd88efee0e997f4efce6_slider-flavour-vanilla-perfection-pack.webp', alt: 'vanilla-perfection' }
  ];

  const contentSlides = [
    { title: 'Strawberry<br />Perfection', link: 'https://morenutrition.co.uk/products/chunky-flavour?_psq=chunky&_v=1.0' },
    { title: 'Fudge<br />Brownie', link: 'https://morenutrition.co.uk/products/chunky-flavour?variant=51094746005668' },
    { title: 'Vanilla Choc<br />Chip Cookie', link: 'https://morenutrition.co.uk/products/chunky-flavour?variant=51094747578532' },
    { title: 'Salted<br />Caramel', link: 'https://morenutrition.co.uk/products/chunky-flavour?variant=51094765076644' },
    { title: 'Vanilla<br />Perfection', link: 'https://morenutrition.co.uk/products/chunky-flavour?variant=51094761996452' }
  ];

  return (
    <section data-inertia className="flavour">
      <div className="flavour-container">
        <div className="flavour-header">
          <div className="flavour-heading-wrap">
            <h2 className="flavour-title">Best Prices</h2>
            <h3 data-highlight-text className="flavour-subline">Great Quality, Low Cost</h3>
          </div>
          <p className="flavour-paragraph">GoShop gives presents an avenue to dodge the hassle, shouting, travel and the bargaining. We do all that for you!</p>
        </div>
        <div data-flavour-content className="flavour-content">
          <div className="flavour-left">
            <div className="flavour-signature-wrap">
              <div className="flavour-signature">
                    <div className="stage-deco-text is-wiggle league-script-regular">Your foodstuffs here</div>
              </div>
              <div style={{ '--animation-delay': '.15s' }} className="flavour-signature-arrow">
                <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c94823659937fb4ddc9834_slider-signature-arrow.svg" loading="lazy" width="147" height="150" alt="slider-signature-arrow" className="flavour-signature-arrow-img" />
                <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c94823659937fb4ddc9834_slider-signature-arrow.svg" loading="lazy" width="147" height="150" alt="slider-signature-arrow" className="flavour-signature-arrow-img is-wiggle" />
              </div>
            </div>
            <div data-inertia-item className="flavour-left-dose">
                  <img src="https://ik.imagekit.io/dr5fryhth/go-shopping/images/gmg.png" loading="lazy" width="481" height="1002" alt="slider-base-product-visual" data-inertia-item-child className="flavour-left-dose-img" />
            </div>
            <div data-inertia-item className="flavour-left-pack is-first">
                  <img src="https://ik.imagekit.io/dr5fryhth/go-shopping/images/nice.png" loading="lazy" width="447" height="699" alt="slider-base-product-pack" data-inertia-item-child className="flavour-left-pack-img" />
            </div>
            <div data-inertia-item className="flavour-left-pack is-second">
                  <img src="https://ik.imagekit.io/dr5fryhth/go-shopping/images/nice.png" loading="lazy" width="447" height="699" alt="slider-base-product-pack" data-inertia-item-child className="flavour-left-pack-img" />
            </div>
          </div>
          <div className="flavour-plus">
            <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c948227a747d8be568507e_slider-plus.svg" loading="lazy" width="146" height="150" alt="slider-plus" className="flavour-plus-img" />
          </div>
          <div className="flavour-right">
            <div data-flavour-slider className="flavour-swiper swiper">
              <div className="flavour-swiper-wrapper swiper-wrapper">
                {slides.map((slide, index) => (
                  <FlavourSlide key={index} doseImg={slide.doseImg} packImg={slide.packImg} alt={slide.alt} />
                ))}
              </div>
            </div>
            <div className="flavour-right-bg">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 769 691" fill="none" data-flavour-content-svg className="flavour-right-bg-svg">
                <path d="M245.813 59.5015C54.1619 152.668 -34.1186 356.234 41.6525 512.101C117.424 667.969 332.042 724.289 523.692 631.123C715.343 537.957 803.624 334.39 727.852 178.522C652.081 22.6546 437.463 -33.6648 245.813 59.5015Z" stroke="currentColor" strokeWidth="28"></path>
              </svg>
            </div>
          </div>
          <div className="flavour-navigation">
            <button type="button" data-flavour-slider-left-button className="flavour-slider-button is-left">
              <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2de0fba88460ab65187e9_icon-arrow-left.svg" loading="lazy" width="20" height="20" alt="icon-arrow-left" className="flavour-slider-button-arrow" />
            </button>
            <button type="button" data-flavour-slider-right-button className="flavour-slider-button is-right">
              <img src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2de0f2245f238d5eb3226_icon-arrow-right.svg" loading="lazy" width="20" height="20" alt="icon-arrow-right" className="flavour-slider-button-arrow" />
            </button>
          </div>
          <div className="flavour-center">
            <div data-flavour-content-slider className="flavour-content-swiper swiper">
              <div className="flavour-content-swiper-wrapper swiper-wrapper">
                {contentSlides.map((slide, index) => (
                  <FlavourContentSlide key={index} title={slide.title} link={slide.link} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
